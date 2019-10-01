# Tailwind CSS BG Alpha Plugin

![Package Version](https://img.shields.io/npm/v/tailwindcss-bg-alpha?style=flat-square)

![Package Total Downloads](https://img.shields.io/npm/dt/tailwindcss-bg-alpha?style=flat-square)

Utility for adding background, border and text colors alpha.

## Requirements

* [Tailwind CSS](https://tailwindcss.com/) >= v1.0.0

## Installation

Install via NPM:

``` sh
npm i --save-dev tailwindcss-bg-alpha
```

Install via YARN:

``` sh
yarn add tailwindcss-bg-alpha
```

## Usage

``` js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [
        require('tailwindcss-bg-alpha')(),
    ]
    // ...
}
```

This plugin generates the following utilities:

``` css
.bg-white-alpha-80 {
    background-color: rgba(255, 255, 255, 0.8)
}

.border-black-alpha-20 {
    border-color: rgba(255, 255, 255, 0.2)
}

.text-customcolor-alpha-100 {
    color: rgba(255, 255, 255, 1)
}
```

Utilities generated are: bg, border and text  
Ranges value for alpha: 0 to 100  
Default colors are: white and black  

## Custom colors

``` js
// tailwind.config.js
module.exports = {
    // ...
    alphaColors: ['red.500', 'gray.200', 'yourcustomcolor.500']
    // ...
}
```

important use `.` for separate color name (e.g. red) to color variant (e.g. 500)  

## Custom values

``` js
// tailwind.config.js
module.exports = {
    // ...
    alphaValues: [0.12, 0.74, 0.87]
    // ...
}
```

important use `.` for separate decimal (e.g. 0.12). Range 0 to 1

## License

Tailwind BG Alpha provided under the [MIT License](https://github.com/adfdev/tailwindcss-bg-alpha/blob/master/LICENSE).

