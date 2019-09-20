# Tailwind CSS BG Alpha Plugin

![Package Version](https://img.shields.io/npm/v/tailwindcss-bg-alpha?style=flat-square)
![Package Total Downloads](https://img.shields.io/npm/dt/tailwindcss-bg-alpha?style=flat-square)

## Requirements

* [Tailwind CSS](https://tailwindcss.com/) >= v1.0.0

## Installation

Install via NPM:

``` sh
$ npm i --save-dev tailwindcss-bg-alpha
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
.bg-white-alpha-0 {
    background-color: rgba(255, 255, 255, 0)
}

.bg-white-alpha-10 {
    background-color: rgba(255, 255, 255, 0.1)
}

.bg-white-alpha-20 {
    background-color: rgba(255, 255, 255, 0.2)
}

.bg-white-alpha-30 {
    background-color: rgba(255, 255, 255, 0.3)
}

.bg-white-alpha-40 {
    background-color: rgba(255, 255, 255, 0.4)
}

.bg-white-alpha-50 {
    background-color: rgba(255, 255, 255, 0.5)
}

.bg-white-alpha-60 {
    background-color: rgba(255, 255, 255, 0.6)
}

.bg-white-alpha-70 {
    background-color: rgba(255, 255, 255, 0.7)
}

.bg-white-alpha-80 {
    background-color: rgba(255, 255, 255, 0.8)
}

.bg-white-alpha-90 {
    background-color: rgba(255, 255, 255, 0.9)
}

.bg-white-alpha-100 {
    background-color: rgba(255, 255, 255, 1)
}

.bg-black-alpha-0 {
    background-color: rgba(0, 0, 0, 0)
}

.bg-black-alpha-10 {
    background-color: rgba(0, 0, 0, 0.1)
}

.bg-black-alpha-20 {
    background-color: rgba(0, 0, 0, 0.2)
}

.bg-black-alpha-30 {
    background-color: rgba(0, 0, 0, 0.3)
}

.bg-black-alpha-40 {
    background-color: rgba(0, 0, 0, 0.4)
}

.bg-black-alpha-50 {
    background-color: rgba(0, 0, 0, 0.5)
}

.bg-black-alpha-60 {
    background-color: rgba(0, 0, 0, 0.6)
}

.bg-black-alpha-70 {
    background-color: rgba(0, 0, 0, 0.7)
}

.bg-black-alpha-80 {
    background-color: rgba(0, 0, 0, 0.8)
}

.bg-black-alpha-90 {
    background-color: rgba(0, 0, 0, 0.9)
}

.bg-black-alpha-100 {
    background-color: rgba(0, 0, 0, 1)
}
```

## Custom colors

``` js
// tailwind.config.js
module.exports = {
    // ...
    alphaColors: ['red.500', 'gray.200', 'yourcustomcolor.500']
    // ...
}
```

important use `.` for separate color name (ex. red) to color variant (ex. 500)

## License

Tailwind BG Alpha provided under the [MIT License](https://github.com/adfdev/tailwindcss-bg-alpha/blob/master/LICENSE).

