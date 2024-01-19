import 'reflect-metadata'
type ValidationErrorHandler = (errorMessage: string) => void;

interface ValidationRule {
    type?: string;
    pattern?: RegExp;
    customValidator?: (value: any) => boolean;
    required?: boolean;
    message?: string;
    properties?: { [property: string]: ValidationRule };
    default?: any;
}


function validateWithRule(rule: ValidationRule) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const existingRules: ValidationRule[] = Reflect.getOwnMetadata('validationRules', target, propertyKey) || [];
        existingRules[parameterIndex] = rule;
        Reflect.defineMetadata('validationRules', existingRules, target, propertyKey);
    }
}


function validateObjectProperties(object: any, rules: { [property: string]: ValidationRule }, errorHandler: (message: string) => void) {
    for (const property in rules) {
        if (!rules.hasOwnProperty(property)) continue;
        const rule = rules[property];
        const value = object[property];

        if (rule.required && (value === undefined || value === null)) {
            errorHandler(rule.message || `Missing required property '${property}'`);
            return true
        }
        if (rule.type && typeof value !== rule.type) {
            errorHandler(rule.message || `Property '${property}' is not of type ${rule.type}`);
            return true
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            errorHandler(rule.message || `Property '${property}' does not match pattern ${rule.pattern}`);
            return true
        }
        if (rule.customValidator && !rule.customValidator(value)) {
            errorHandler(rule.message || `Property '${property}' failed custom validation`);
            return true
        }

        // 递归校验嵌套对象
        if (rule.properties && typeof value === 'object' && value !== null) {
            validateObjectProperties(value, rule.properties, errorHandler);
        }
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
                if (!rule) return;
                // 对象属性的深层校验
                if (rule.properties && typeof arg === 'object' && arg !== null) {
                    const checkFail = validateObjectProperties(arg, rule.properties, errorHandler)
                    if (checkFail) return
                } else {
                    if (rule.required && (arg === undefined || arg === null)) {
                        if (rule.hasOwnProperty('default')) {
                            args[index] = rule.default; // 设置默认值
                        } else {
                            return errorHandler(rule.message || `Missing required argument at position ${index}`);
                        }

                    }
                    if (rule.type && typeof arg !== rule.type) {
                        if (rule.hasOwnProperty('default')) {
                            args[index] = rule.default; // 设置默认值
                        } else {
                            return errorHandler(rule.message || `Argument at position ${index} is not of type ${rule.type}`);
                        }
                    }
                    if (rule.pattern && !rule.pattern.test(arg)) {
                        return errorHandler(rule.message || `Argument at position ${index} does not match pattern ${rule.pattern}`);
                    }
                    if (rule.customValidator && !rule.customValidator(arg)) {
                        return errorHandler(rule.message || `Argument at position ${index} failed custom validation`);
                    }
                }
            };
            return method.apply(this, args);
        }
    }
}


class MyClass {
    @validate((message: string) => {
        console.log(message)
    })
    method(
        // @validateWithRule({ type: 'number', required: true, message: 'arg1 is not number', default: 2 })
        arg1: any,
        @validateWithRule({ pattern: /^[a-zA-Z]+$/, required: true, type: 'string' })
        arg2: any,
        @validateWithRule({ customValidator: (v) => v > 10, message: "arg3 is less then 10" })
        arg3?: any,
        @validateWithRule({
            type: "object",
            properties:
                { name: { type: 'string', message: "name is not a string" } }
        })
        arg4?: any
    ) {
        console.log(arg1, arg2, arg3, arg4);
    }
}

const myClass = new MyClass();
myClass.method('123', 'abc', 20, { name: '1' }); // 正常执行
// myClass.method(123, 'abc', 15, { name: 1 }); // 抛出类型错误
// myClass.method(123, '123', 15); // 抛出正则表达式匹配错误
// myClass.method(123, 'abc'); // 抛出缺少必需参数的错误
