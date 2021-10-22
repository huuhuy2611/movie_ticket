// .babelrc.js
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          plugins: ['@styled-jsx/plugin-sass'],
        },
      },
    ],
  ],
  plugins: [
    ['import', { libraryName: 'antd', style: true }],
    ['styled-components', { ssr: true }],
  ],
};
