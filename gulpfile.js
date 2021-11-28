const { series, parallel } = require('gulp');
const clean = require('./_gulp/clean');
const { serve } = require('./_gulp/browser-sync');
const { html, modals } = require('./_gulp/pages');
const styles = require('./_gulp/styles');
const { scripts } = require('./_gulp/scripts');
const { images, videos } = require('./_gulp/images');
const { watch } = require('./_gulp/watch');

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.img = images;
exports.videos = videos;
exports.watch = watch;


exports.dev = series(
  clean,
  parallel(html, styles, scripts, images, videos, modals),
  parallel(serve, watch)
);

exports.build = series(
    clean,
    parallel(html, modals, styles, scripts, images, videos),
    parallel(watch)
);
