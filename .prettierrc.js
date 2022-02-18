module.exports = {
    semi: false, // 行位是否使用分号，默认为true
    trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
    printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
    useTabs: false, // 启用tab缩进
    bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    tabWidth: 4, //缩进
    arrowParens: 'avoid' //(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
};
