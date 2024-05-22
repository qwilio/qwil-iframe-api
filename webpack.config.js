const path = require('path');
const webpack = require('webpack');
const PACKAGE = require('./package.json');

const version = PACKAGE.version;
const libName = 'qwil-iframe-api';
const now = (new Date()).toUTCString();

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
      raw: true,
      banner: `/* ${libName} version ${version} built ${now} */`,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  ]
};

const transportBuildConfig = {
  entry: './src/transport/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `qwil-api-transport.js`,
    library: 'QwilApiTransport',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new webpack.BannerPlugin({
      raw: true,
      banner: `/* qwil-api-transport version ${version} built ${now} */`,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  ]
};

module.exports = [apiBuildConfig, transportBuildConfig];
