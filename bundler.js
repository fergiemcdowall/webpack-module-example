import webpack from 'webpack';
import webpackConfig from './webpack.config.js'; // <-- Contains ES6+

const bundler = webpack(webpackConfig);

bundler.run((err, stats) => {

  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

});
