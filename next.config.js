/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
};

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  lessVarsFilePath: './src/styles/antd.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Other Config Here...

  // webpack(config) {
  //   return config;
  // },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block

  // webpack5: true,

});