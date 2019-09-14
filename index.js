const _ = require('lodash')
const hexToRgba = require("hex-to-rgba")

module.exports = () => {
    return ({ addUtilities, variants, theme }) => {

        let colors = {
            'white': '#ffffff',
            'black': '#000000',
        }
        const customColors = theme('alphaColors')
        if (customColors !== undefined) {
            if (customColors.length > 0) {
                for (let index = 0; index < customColors.length; index++) {
                    const color = customColors[index];
                    const colorValue = theme(`colors.${color}`)
                    const colorName = color.split('.').join('-')
                    colors[colorName] = colorValue
                }
            }
        }

        let values = []
        for (let index = 0; index <= 10; index++) {
            values[`${index > 0 ? index * 10 : 0}`] = index > 0 ? index / 10 : 0
        }

        _.each(colors, (value, key) => {
            addUtilities(values.map((vOpacity, index) => {
                let selector = `.bg-${key}-alpha-${index}`
                let utility = `background-color`

                return {
                    [selector]: {
                        [utility]: hexToRgba(value, vOpacity)
                    }
                }
            }), variants('backgroundColor'))
        })
    }
}