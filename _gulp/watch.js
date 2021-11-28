const { watch, series } = require('gulp');
const { reload } = require('./browser-sync');
const { html } = require('./pages');
const styles = require('./styles');
const { scripts } = require('./scripts');
const { images, videos } = require('./images');

const { source } = require('./_config');

function watcher() {
  watch(`${source}/*.html`, series(html, reload));
  watch(`${source}/scss/**/*`, styles);
  watch(`${source}/js/**/*`, series(scripts, reload));
  watch(`${source}/img/**/*`, series(images, reload));
  watch(`${source}/video/*`, series(videos, reload));
}

exports.watch = watcher;