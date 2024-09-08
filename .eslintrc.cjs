module.exports = {
  // 指定代码运行的环境
  env: {
    // 浏览器环境
    browser: true,
    // 支持 ES2021 语法
    es2021: true,
    // 支持 Node.js 环境
    node: true
  },
  // 继承的规则
  extends: [
    // 推荐规则
    'eslint:recommended',
    // Vue 3 基础规则
    'plugin:vue/vue3-essential',
    // TypeScript 规则
    'plugin:@typescript-eslint/recommended'
  ],
  // 全局变量
  globals: {
    defineOptions: true
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器选项
  parserOptions: {
    // 使用最新的ECMAScript版本
    ecmaVersion: 'latest',
    //使用ECMAScript模块
    sourceType: 'module',
    // 使用 TypeScript 解析器
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
      'ignoreRestSiblings': true 
    }],
  }
};
