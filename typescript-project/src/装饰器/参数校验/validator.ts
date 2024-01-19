type ValidationErrorHandler = (errorMessage: string) => void;

const validationRules = new WeakMap<Object, Map<string | symbol, ValidationRule[]>>();

interface ValidationRule {
    type?: string;
    pattern?: any;
    customValidator?: (value: any) => boolean;
    required?: boolean;
    message?: string;
    properties?: { [property: string]: ValidationRule };
    default?: any;
}
interface ValidateResult {
    pass: boolean
    message: string
}


export class Validate {
    private fail(rule: ValidationRule, defaultMessage: string): ValidateResult {
        return {
            pass: false,
            message: rule.message || defaultMessage
        };
    }
    private isNullOrUndefined(value: any): boolean {
        return value === null || value === undefined;
    }
    private getType(value: any): string {
        if (value === null) return 'null';
        if (Array.isArray(value)) return 'array';
        const type = typeof value;
        if (type === 'object') {
            return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
        }
        return type;
    }
    private validateObject(rules: { [property: string]: ValidationRule }, object: any): ValidateResult {
        for (const property in rules) {
            if (rules.hasOwnProperty(property)) {
                const rule = rules[property];
                const result = this.validate(rule, object[property]);
                if (!result.pass) {
                    return result;
                }
            }
        }
        return { pass: true, message: '' };
    }
    validate(rule: ValidationRule, value: any): ValidateResult {
        if (rule.required && this.isNullOrUndefined(value)) {
            return this.fail(rule, 'Value is required');
        }

        const valueType = this.getType(value);
        if (rule.type && valueType !== rule.type) {
            return this.fail(rule, `Expected type ${rule.type}, got ${valueType}`);
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            return this.fail(rule, rule.message || 'Value does not match pattern');
        }

        if (rule.customValidator && !rule.customValidator(value)) {
            return this.fail(rule, rule.message || 'Custom validation failed');
        }

        if (valueType === 'object' && rule.properties) {
            return this.validateObject(rule.properties, value);
        }

        return { pass: true, message: '' };
    }

    Rule(rule: ValidationRule) {
        return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
            const rulesForTarget = validationRules.get(target) || new Map<string | symbol, ValidationRule[]>();
            const existingRules = rulesForTarget.get(propertyKey) || [];
            existingRules[parameterIndex] = rule;
            rulesForTarget.set(propertyKey, existingRules);
            validationRules.set(target, rulesForTarget);
        }
    }

    Validator(errorHandler?: ValidationErrorHandler) {
        /* todo: 这里 this 指向 undefined */
        const _this = this
        return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
            const method = descriptor.value;
            descriptor.value = function (...args: any[]) {
                const rulesForTarget = validationRules.get(target);
                const rules = rulesForTarget?.get(propertyName) || [];
                for (let index = 0; index < rules.length; index++) {
                    const arg = args[index];
                    const rule = rules[index]
                    if (!rule) continue;
                    const result = _this.validate(rule, arg)
                    if (!result.pass) {
                        if (_this.getType(errorHandler) === 'function') {
                            errorHandler && errorHandler(result.message)
                        }
                        return
                    }
                }
                return method.apply(this, args);
            }
        }
    }
}