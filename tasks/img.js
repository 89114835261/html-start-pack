const { src, dest } = require('gulp')

// Configuration
const path = require('../config/path.js')
const settings = require('../config/settings.js')

//Plugins
const plumber = require('gulp-plumber') // Выводим сообщения
const notify = require('gulp-notify') // Перенаправляем сообщения в ОС
const imagemin = require('gulp-imagemin') // Optimization images
const newer = require('gulp-newer') // Watcher resize images
const webp = require('gulp-webp') // Watcher resize images
const gulpif = require('gulp-if')

// processing
const img = () => {
  return src(path.img.src)
    .pipe(plumber(settings.plumber(notify, 'Image Error')))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(settings.isProduction, imagemin(settings.imagemin.configuration)))
    .pipe(dest(path.img.dest))
}

module.exports = img
