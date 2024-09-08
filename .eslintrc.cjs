module.exports = {
  // 指定代码运行的环境
  env: {
    // 设置为 true 表示代码会在浏览器环境中运行，这样ESLint会预定义浏览器全局变量（如 window, document 等）
    browser: true,
    // 支持到ES2021（ECMAScript 2021）的新语法特性
    es2021: true,
    // 设置为 true 表示代码在Node.js环境中运行，ESLint会预定义Node.js全局变量和作用域
    node: true
  },
  // 继承的规则
  extends: [
    // 包含一组核心规则，这些规则能发现代码中的常见问题。这是ESLint官方提供的一套推荐规则，它内置于ESLint中，不需要额外安装
    'eslint:recommended',
    // 应用Vue.js 3.x版本的基本规则集，用于Vue文件的检查，需要安装Vue的ESLint插件（eslint-plugin-vue）
    'plugin:vue/vue3-essential',
    // 适用于 TypeScript 的推荐规则集，提供了与 TypeScript 相关的最佳实践，通过@typescript-eslint/eslint-plugin提供。
    'plugin:@typescript-eslint/recommended'
  ],
  // 全局变量
  globals: {
    // 这是一个Vue 3的全局方法，你在这里将其设置为true，表示在代码中可以自由使用而不会被ESLint标记为未定义
    defineOptions: true
  },
  // 用于解析 .vue 文件，使 ESLint 能够理解和检查 Vue 组件的 <template> 和 <script> 部分
  parser: 'vue-eslint-parser',
  // 解析器选项
  parserOptions: {
    // 使用最新的ECMAScript版本
    ecmaVersion: 'latest',
    //使用ECMAScript模块
    sourceType: 'module',
    // 指定使用@typescript-eslint/parser来解析TypeScript代码
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    // 添加 Vue.js 相关的规则，使用这个插件需要安装eslint-plugin-vue
    'vue', 
    // 添加 TypeScript 相关的规则，使用这个插件需要安装@typescript-eslint/eslint-plugin和@typescript-eslint/parser
    '@typescript-eslint'
  ],
  rules: {
    // 禁用 @ts-ignore、@ts-nocheck、@ts-check 等 TypeScript 特定的注释
    '@typescript-eslint/ban-ts-comment': 'off',
    // 关闭对 Vue 组件名称必须为多单词的限制
    'vue/multi-word-component-names': 'off',
    // 配置未使用变量的检查规则，允许变量和参数名以 _ 开头，忽略剩余的兄弟属性
    '@typescript-eslint/no-unused-vars': ['error', { 
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
      'ignoreRestSiblings': true 
    }],
  }
};
