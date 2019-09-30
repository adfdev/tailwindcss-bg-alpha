const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const bgAlphaPlugin = require('./index.js');

const generatePluginCss = (config = {}) => {
    return postcss(
        tailwindcss(
            _.merge({
                theme: {
                    alphaColors: []
                },
                corePlugins: false,
                plugins: [
                    bgAlphaPlugin(),
                ],
            }, config)
        )
    )
        .process('@tailwind base; @tailwind utilities', {
            from: undefined,
        })
        .then(result => {
            return result.css;
        });
};

expect.extend({
    toMatchCss: cssMatcher,
});

test('generate all', () => {
    return generatePluginCss().then(css => {
        console.log(css)
    });
});