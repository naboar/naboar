const path = require('path')

module.exports = {
  title: "Style-Guide",
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
  theme: {
    color: {
      base: '#f0f0f0',
      light: '#f9f9f9',
      lightest: '#fff',
      link: '#1de9b6',
      linkHover: '#00bfa5',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: '#555',
      name: '#b388ff',
      type: '#fb8c00',
      error: '#d50000',
      baseBackground: '#222',
      codeBackground: '#333',
      sidebarBackground: '#333',
      ribbonBackground: '#00bfa5',
      ribbonText: '#fff',

      // Based on default Prism theme
      codeComment: '#bdbdbd',
      codePunctuation: '#999',
      codeProperty: '#fb8c00',
      codeDeleted: '#fb8c00',
      codeString: '#aa00ff',
      codeInserted: '#aa00ff',
      codeOperator: '#a1887f',
      codeKeyword: '#448aff',
      codeFunction: '#DD4A68',
      codeVariable: '#00bfa5',
    }
  }
}
