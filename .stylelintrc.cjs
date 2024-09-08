module.exports = {
  // 注册了stylelint-prettier插件，使stylelint能够集成Prettier的格式化功能。这允许你在stylelint检查的同时应用Prettier的自动格式化
  plugins: ['stylelint-prettier'],
  // 继承一系列规则集合
  extends: [
    //继承了stylelint-config-standard，它包含了一套广泛接受的标准规则，这些规则旨在避免错误和实现最佳实践
    'stylelint-config-standard',
    // 针对Less文件的推荐规则集，适用于使用Less作为CSS预处理器的项目。
    'stylelint-config-recommended-less',
    // 样式属性的排序规则，基于RECESS的排序原则。这有助于保持CSS属性声明的一致性和可读性。
    'stylelint-config-recess-order',
    // 接入 Prettier 规则
    // 确保所有stylelint的规则不会与Prettier的格式化规则冲突。这是在使用Prettier作为代码格式化工具时的必要配置
    'stylelint-config-prettier',
    // 这是一个便捷的配置，同时包含了stylelint-prettier插件和stylelint-config-prettier配置，确保stylelint与Prettier完美整合。
    'stylelint-prettier/recommended'
  ],
  customSyntax: 'postcss-less',
  // 配置 rules
  rules: {
    // 启用Prettier自动格式化功能。这意味着在stylelint运行时，Prettier将自动格式化样式文件。
    'prettier/prettier': true,
    // 要求类名以小写字母开始，允许数字和中划线，或者以x-开头后接小写字母和中划线。这有助于保持类名的一致性和符合特定命名约定
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^x-[a-z]+(-{1,2}[a-z]+)*$',
      {
        message: function (selector) {
          return `Expected class selector "${selector}" to match custom pattern`
        }
      }
    ]
  }
}
