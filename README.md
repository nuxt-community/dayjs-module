# nuxt-dayjs-module

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/nuxt-dayjs-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-dayjs-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![NPM downloads](https://img.shields.io/npm/dm/nuxt-dayjs-module.svg?style=flat)](https://npmjs.com/package/nuxt-dayjs-module)
[![codecov](https://codecov.io/gh/potato4d/nuxt-dayjs-module/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/nuxt-dayjs-module)

> The best way for use Day.js easily in your Nuxt.js project.

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

## Installation

```bash
$ yarn add nuxt-dayjs-module # or npm install
```

## Usage

### 1. Register dayjs module to your Nuxt Application

```js
export default {
  // ...
  modules: [
    'nuxt-dayjs-module'
  ],
  // ...
}
```

### 2. Use $dayjs on Context, Vue instance

with Context

```html
<script>
export default {
  asyncData({ $dayjs }) {
    return {
      now: $dayjs().format('YYYY/MM/DD')
    }
  }
}
</script>
```

with Vue instance

```html
<script>
export default {
  data() {
    return {
      latestClicked: null
    }
  },
  methods: {
    handleClickButton() {
      this.latestClicked = this.$dayjs().format('YYYY/MM/DD')
    }
  }
}
</script>
```

## Development

```bash
$ git clone https://github.com/potato4d/nuxt-dayjs-module.git
$ cd nuxt-dayjs-module
$ yarn
```

## License

MIT @potato4d

## Note

This project generated by [create-nuxt-module](https://github.com/potato4d/create-nuxt-module)
