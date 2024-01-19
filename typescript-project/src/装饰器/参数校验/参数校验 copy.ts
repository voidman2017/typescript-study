import 'reflect-metadata'
function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    let method = descriptor.value;
    descriptor.value = function () {
        const requiredParameters: number[] = Reflect.getOwnMetadata("required", target, propertyName) || [];
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    target.constructor.sendFailCallback("Missing required argument.")
                    return
                }
            }
        }
        return method.apply(this, arguments);
    }
}

function required(target: any, propertyName: string, index: number) {
    const existingRequiredParameters: number[] = Reflect.getOwnMetadata("required", target, propertyName) || [];
    existingRequiredParameters.push(index);
    Reflect.defineMetadata("required", existingRequiredParameters, target, propertyName);
}

class MyClass {
    static sendFailCallback(message: string): void {
        console.log(`call fn error: ${message}`)
    }
    @validate
    method(arg1: any, @required arg2?: any) {
        console.log(arg1, arg2);
    }
}

const myClass = new MyClass();
myClass.method(1, 2); // Works fine
myClass.method(1); // Throws error: Missing required argument.
myClass.method(3, 4); // Works fine
