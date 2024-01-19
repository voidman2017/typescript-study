import { Validator, Rule, validate, Callback } from './参数校验'

// import { Validate } from './validator.ts'
// const v = new Validate()
// const Validator = v.Validator
// const Rule = v.Rule
// const validate = v.validate

class MyClass {
    @Validator((msg) => {
        console.warn('===debug=== msg: ', msg);
    })
    method(
        @Rule({ type: 'number', required: true, message: '第一个参数需要number类型', })
        arg1: any,
        @Rule({ pattern: /^[a-zA-Z]+$/, required: true, type: 'string' })
        arg2: any,
        @Rule({ customValidator: (v) => v > 10, message: "xxxxxxxxxxxx - arg3 is less then 10" })
        arg3?: any,
        @Rule({
            type: "object",
            properties:
                { name: { type: 'string', message: "xxxxxxxxxxxxxxx - name is not a string" } }
        })
        arg4?: any
    ) {
        console.log('MyClass.method', arg1, arg2, arg3, arg4);
    }

    method2(
        arg1: any,
        arg2: any,
        arg3?: any,
        arg4?: any

    ) {
        const rules = [
            { type: 'number', required: true, message: '第一个参数需要number类型', },
            { pattern: /^[a-zA-Z]+$/, required: true, type: 'string' },
            { customValidator: (v: number) => v > 10, message: "xxxxxxxxxxxx - arg3 is less then 10" },
            {
                type: "object",
                properties:
                    { name: { type: 'string', message: "xxxxxxxxxxxxxxx - name is not a string" } }
            }
        ]
        let errorMsg;
        const hasError = rules.some((rule, index) => {
            const arg = arguments[index]
            const result = validate(rule, arg)
            if (result.pass === false) {
                errorMsg = result.message
                return true
            } else {
                return false
            }
        })
        if (hasError) {
            console.error(errorMsg)
            return
        }
    }
}

const myClass = new MyClass();
myClass.method(123, 'abc', 20, { name: '1' }); // 正常执行
myClass.method(123, 'abc', 15, { name: 1 }); // 抛出类型错误
myClass.method2(123, 'abc', 15, { name: 1 }); // 抛出类型错误
myClass.method(123, '123', 15); // 抛出正则表达式匹配错误
myClass.method(123, 'abc'); // 抛出缺少必需参数的错误


const groups = [
    {
        rule: { type: 'number', required: true, message: '第一个参数需要number类型', },
        value: '123'
    },
    {
        rule: {
            type: "object",
            properties:
                { name: { type: 'string', message: "name is not a string" } }
        },
        value: '123'
    },
    {
        rule: {
            type: "object",
            properties:
                { name: { type: 'string', message: "name is not a string" } }
        },
        value: {
            name: '123'
        }
    },
    {
        rule: { pattern: /^[a-zA-Z]+$/, required: true, type: 'string' },
        value: 'dsfsdf'
    }
]

groups.forEach(item => {
    const result = validate(item.rule, item.value)
    console.log('===debug=== result: ', item, result);
})