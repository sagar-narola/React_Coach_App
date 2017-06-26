/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack');
const pathLib = require('path');

const devBuild = process.env.NODE_ENV !== 'production';

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './app/bundles/HelloWorld/startup/registration',
    './app/bundles/Coach/startup/LandingPage',

    './app/bundles/Coach/startup/FeaturesPage',


    './app/bundles/Coach/startup/RegistrationApp',
    './app/bundles/Coach/startup/Login',
    './app/bundles/Coach/startup/Home',
    './app/bundles/Coach/startup/ForgetPassword',

    './javascripts/components/owl.carousel',
    //'./javascripts/owl.carousel',
    './javascripts/owlcarouselsrc',
    //'./../app/assets/javascripts/application',

    './stylesheets/components/owl.carousel',


  ],

  output: {
    filename: 'webpack-bundle.js',
    path: pathLib.resolve(__dirname, '../app/assets/webpack'),
  },

  resolve: {
    extensions: ['.js', '.jsx','.css','.scss'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
  ],
  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }
      ]},
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
