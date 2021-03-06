const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

const plugins = [];

if (process.env.NODE_ENV === 'production') {
  const Prerender = new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/', '/contacts', '/pay', '/about', '/news', '/rso'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      injectProperty: 'PRERENDER_INJECTED',
      inject: {
        foo: 'bar',
      },
    }),
  });

  plugins.push(Prerender);
}

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins,

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        '@': path.resolve('src/'),
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
      },
    },
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          ...options.compilerOptions,
          preserveWhitespace: true,
        },
      }));

    config.module
      .rule('modernizr')
      .test(/\.modernizrrc$/)
      .use('webpack-modernizr-loader')
      .loader('webpack-modernizr-loader');

    config.optimization.minimizer('terser').tap((args) => {
      const a = args;
      a[0].terserOptions.compress.drop_console = true;
      return a;
    });
  },
};
