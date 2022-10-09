const { src, dest } = require('gulp')

// Configuration
const path = require('../config/path.js')
const settings = require('../config/settings.js')

//Plugins
const plumber = require('gulp-plumber') // Выводим сообщения
const notify = require('gulp-notify') // Перенаправляем сообщения в ОС
const rename = require('gulp-rename') //Изменяем имя
const babel = require('gulp-babel')
const webpack = require('webpack-stream')

// processing
const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(plumber(settings.plumber(notify, 'JavaScript')))
    .pipe(babel())
    .pipe(webpack(settings.webpack.configuration))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.js.dest, { sourcemaps: true }))
}

module.exports = js
