//needs laravel-mix and tailwind at the start to work properly
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.vue({
        version: 2
    })
        .js('src/js/components.js', 'dist/components.js')
        //src js file compiles into dist > js folder

        .sass('src/css/app.scss', 'dist/app.css')
        //src scss file compiles into dist > css folder

        .browserSync({
            notify: false,
            server: {
                baseDir: "dist",
                index: "index.html"
            }
        })
        .options({
            processCssUrls: false,
            postCss: [tailwindcss()],
            terser: {
                extractComments: false
            }
        });
        //global settings including base directory, index for generated site, and tailwind postcss
        // To process and copy SVG files. 
        mix.override(config => {
            config.module.rules.find(rule => rule.test.test('.svg')).exclude = /\.svg$/
        
            config.module.rules.push({
                test: /\.svg$/,
                use: [{ loader: 'html-loader' }],
            })
        }) 