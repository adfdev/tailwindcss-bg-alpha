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
            if (Object.keys(customColors).length > 0) {
                for (let index = 0; index < Object.keys(customColors).length; index++) {
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
                let bg_selector = `.bg-${key}-alpha-${index}`
                let bg_utility = `background-color`
                let border_selector = `.border-${key}-alpha-${index}`
                let border_utility = `border-color`
                let text_selector = `.text-${key}-alpha-${index}`
                let text_utility = `color`

                const hexColor = hexToRgba(value, vOpacity)

                return {
                    [bg_selector]: {
                        [bg_utility]: hexColor
                    },
                    [border_selector]: {
                        [border_utility]: hexColor
                    },
                    [text_selector]: {
                        [text_utility]: hexColor
                    }
                }
            }), variants('backgroundColor', 'borderColor', 'color'))
        })
    }
}