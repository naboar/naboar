const path = require('path')

module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper'),
  },
  sections: [
    {
      name: 'Introduction',
      content: 'doc/intro.md',
    },
    {
      name: 'Usage',
      content: 'doc/usage.md',
    },
    {
      name: 'Components',
      description: 'All of the components',
      components: 'src/components/**/[A-Z]*.tsx',
      usageMode: 'expand',
    },
    {
      name: 'Effects',
      description: 'Animation components',
      components: 'src/effects/**/[A-Z]*.tsx',
      usageMode: 'expand',
    },
  ],
}
