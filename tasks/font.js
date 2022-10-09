const { src, dest, parallel } = require('gulp')

// Configuration
const path = require('../config/path.js')
const settings = require('../config/settings.js')

//Plugins
const plumber = require('gulp-plumber') // Выводим сообщения
const notify = require('gulp-notify') // Перенаправляем сообщения в ОС
const newer = require('gulp-newer')
const ttf2woff2 = require('gulp-ttf2woff2')
const ttf2woff = require('gulp-ttf2woff')
const svg2ttf = require('gulp-svg2ttf')

// processing
const woff = () => {
  return src(path.font.src)
    .pipe(plumber(settings.plumber(notify, 'Font woff error')))
    .pipe(newer(path.font.dest))
    .pipe(svg2ttf())
    .pipe(ttf2woff({ clone: true }))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest))
}

const woff2 = () => {
  return src(path.font.src)
    .pipe(plumber(settings.plumber(notify, 'Font woff2 error')))
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest))
}

module.exports = parallel(woff)
