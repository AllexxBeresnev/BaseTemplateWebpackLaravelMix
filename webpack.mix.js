let mix = require('laravel-mix');

mix.js('src/js/script.js', 'js')
mix.sass('src/sass/style.sass', 'css');

mix.setPublicPath('asserts');