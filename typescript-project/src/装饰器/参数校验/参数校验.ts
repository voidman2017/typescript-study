type ValidationErrorHandler = (errorMessage: string) => void;

const validationRules = new WeakMap<Object, Map<string | symbol, validationRulesWithCallback>>();

interface validationRulesWithCallback {
    rules: ValidationRule[]
    callbackIndex?: number
}
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


export function Rule(rule: ValidationRule) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const rulesForTarget = validationRules.get(target) || new Map<string | symbol, validationRulesWithCallback>();
        const existingRules = rulesForTarget.get(propertyKey) || { rules: [] };
        existingRules.rules[parameterIndex] = rule;
        rulesForTarget.set(propertyKey, existingRules);
        validationRules.set(target, rulesForTarget);
    }
}

export function Callback() {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        const rulesForTarget = validationRules.get(target) || new Map<string | symbol, validationRulesWithCallback>();
        const existingRules = rulesForTarget.get(propertyKey) || { rules: [] };
        existingRules.callbackIndex = parameterIndex;
        rulesForTarget.set(propertyKey, existingRules);
        validationRules.set(target, rulesForTarget);
    }
}


export function Validator(errorHandler?: ValidationErrorHandler) {
    return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const rulesForTarget = validationRules.get(target);
            const rules = rulesForTarget?.get(propertyName)?.rules || [];
            for (let index = 0; index < rules.length; index++) {
                const arg = args[index];
                const rule = rules[index]
                if (!rule) continue;
                const result = validate(rule, arg)
                if (!result.pass) {
                    const callbackIndex = rulesForTarget?.get(propertyName)?.callbackIndex
                    if (callbackIndex && getType(args[callbackIndex]) === 'function') {
                        args[callbackIndex](result)
                    }
                    if (typeof errorHandler === 'function') {
                        errorHandler(result.message)
                    }
                    return
                }
            }
            return method.apply(this, args);
        }
    }
}

export function validate(rule: ValidationRule, value: any): ValidateResult {
    if (rule.required && isNullOrUndefined(value)) {
        return fail(rule, 'Value is required');
    }

    const valueType = getType(value);
    if (rule.type && valueType !== rule.type) {
        return fail(rule, `Expected type ${rule.type}, got ${valueType}`);
    }

    if (rule.pattern && !rule.pattern.test(value)) {
        return fail(rule, rule.message || 'Value does not match pattern');
    }

    if (rule.customValidator && !rule.customValidator(value)) {
        return fail(rule, rule.message || 'Custom validation failed');
    }

    if (valueType === 'object' && rule.properties) {
        return validateObject(rule.properties, value);
    }

    return { pass: true, message: '' };
}

function validateObject(rules: { [property: string]: ValidationRule }, object: any): ValidateResult {
    for (const property in rules) {
        if (rules.hasOwnProperty(property)) {
            const rule = rules[property];
            const result = validate(rule, object[property]);
            if (!result.pass) {
                return result;
            }
        }
    }
    return { pass: true, message: '' };
}

function getType(value: any): string {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    const type = typeof value;
    if (type === 'object') {
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }
    return type;
}

function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

function fail(rule: ValidationRule, defaultMessage: string): ValidateResult {
    return {
        pass: false,
        message: rule.message || defaultMessage
    };
}


