import 'reflect-metadata'
type ValidationErrorHandler = (errorMessage: string) => void;

interface ValidationRule {
    type?: string;
    pattern?: RegExp;
    customValidator?: (value: any) => boolean;
    required?: boolean;
    message?: string
}

function validateWithRule(rule: ValidationRule) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const existingRules: ValidationRule[] = Reflect.getOwnMetadata('validationRules', target, propertyKey) || [];
        existingRules[parameterIndex] = rule;
        Reflect.defineMetadata('validationRules', existingRules, target, propertyKey);
    }
}


function validate(errorHandler: ValidationErrorHandler) {
    return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const rules: ValidationRule[] = Reflect.getOwnMetadata('validationRules', target, propertyName) || [];
            for (let index = 0; index < rules.length; index++) {
                const arg = args[index];
                const rule = rules[index]
                if (rule.required && (arg === undefined || arg === null)) {
                    return errorHandler(rule.message ? rule.message : `Missing required argument at position ${index}`);
                }
                if (rule.type && typeof arg !== rule.type) {
                    return errorHandler(rule.message ? rule.message : `Argument at position ${index} is not of type ${rule.type}`);
                }
                if (rule.pattern && !rule.pattern.test(arg)) {
                    return errorHandler(rule.message ? rule.message : `Argument at position ${index} does not match pattern ${rule.pattern}`);
                }
                if (rule.customValidator && !rule.customValidator(arg)) {
                    return errorHandler(rule.message ? rule.message : `Argument at position ${index} failed custom validation`);
                }
            }
            return method.apply(this, args);
        }
    }
}


class MyClass {
    @validate((message: string) => {
        console.log(message)
    })
    method(
        @validateWithRule({ type: 'number', required: true, message: 'url is required' })
        url: any,
        @validateWithRule({ pattern: /^[a-zA-Z]+$/, required: true })
        arg2: any,
        @validateWithRule({ customValidator: (v) => v > 10 })
        arg3?: any
    ) {
        console.log(url, arg2, arg3);
    }
}

const myClass = new MyClass();
myClass.method(123, 'abc', 20); // 正常执行
myClass.method('123', 'abc', 5); // 抛出类型错误
myClass.method(123, '123', 15); // 抛出正则表达式匹配错误
myClass.method(123, 'abc'); // 抛出缺少必需参数的错误
