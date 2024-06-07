const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const year = new Date().getFullYear();
const libName = 'qwil-iframe-api';
const now = (new Date()).toUTCString();
const banner = `/**!
 * ${pkg.name} (built ${now})
 * 
 * @copyright ${year} ${pkg.author}
 * @license ${pkg.license}
 * @version ${pkg.version}
 */
 `;

const apiBuildConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${libName}.js`,
    library: 'QwilApi',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION_INJECTED_BY_WEBPACK: JSON.stringify(
        require("./package.json").version,
      ),
    }),
    new webpack.BannerPlugin({
      banner,
      raw: true,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  ]
};


module.exports = [apiBuildConfig];
