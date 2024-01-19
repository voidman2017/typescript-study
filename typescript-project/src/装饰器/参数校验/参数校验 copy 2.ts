import 'reflect-metadata';

// 装饰器：要求参数
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingRequiredParameters: number[] = Reflect.getOwnMetadata('required', target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata('required', existingRequiredParameters, target, propertyKey);
}

// 装饰器：类型校验
function type(type: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const existingTypes = Reflect.getOwnMetadata('types', target, propertyKey) || {};
        existingTypes[parameterIndex] = type;
        Reflect.defineMetadata('types', existingTypes, target, propertyKey);
    }
}

// 装饰器：正则表达式校验
function pattern(regex: RegExp) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const existingPatterns = Reflect.getOwnMetadata('patterns', target, propertyKey) || {};
        existingPatterns[parameterIndex] = regex;
        Reflect.defineMetadata('patterns', existingPatterns, target, propertyKey);
    }
}

// 方法装饰器：执行校验
function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        // 必需参数校验
        const requiredParameters: number[] = Reflect.getOwnMetadata('required', target, propertyName) || [];
        requiredParameters.forEach(parameterIndex => {
            if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
                target.constructor.sendErrorMessage(`Missing required argument at position ${parameterIndex}`);
            }
        });

        // 类型校验
        const types = Reflect.getOwnMetadata('types', target, propertyName) || {};
        Object.keys(types).forEach(index => {
            const i = parseInt(index);
            if (typeof args[i] !== types[i]) {
                target.constructor.sendErrorMessage(`Argument at position ${i} is not of type ${types[i]}`);
            }
        });

        // 正则表达式校验
        const patterns = Reflect.getOwnMetadata('patterns', target, propertyName) || {};
        Object.keys(patterns).forEach(index => {
            const i = parseInt(index);
            if (!patterns[index].test(args[i])) {
                target.constructor.sendErrorMessage(`Argument at position ${i} does not match pattern ${patterns[i]}`);
            }
        });

        return method.apply(this, args);
    }
}



class MyClass {
    static sendErrorMessage(message: string) {
        console.log(message)
    }

    @validate
    method(
        @required @type('number') arg1: any,
        @required @pattern(/^[a-zA-Z]+$/) arg2?: any
    ) {
        console.log(arg1, arg2);
    }
}

const myClass = new MyClass();

myClass.method(111, 'aaa'); // 正常执行
myClass.method('222', 'bbb'); // 抛出类型错误
myClass.method(333, 'ccc'); // 抛出正则表达式匹配错误
myClass.method(444); // 抛出缺少必需参数的错误
