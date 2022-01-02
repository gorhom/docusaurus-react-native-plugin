# Docusaurus React Native Plugin

A plugin to enable React Native Web and Reanimated on Docusaurus.

## Installation

```bash
yarn add @gorhom/docusaurus-react-native-plugin -D
```

## Usage

### Monorepo

in the file `docusaurus.config.js` add the following

```js
...
plugins: [
  '@gorhom/docusaurus-react-native-plugin',
  {
    alias: {
      '{MY PACKAGE NAME}': path.resolve(
        __dirname,
        {MY PACKAGE PATH}
      ),
      'react-native-reanimated': path.resolve(
        __dirname,
        {REANIMATED PACKAGE PATH}
      ),
    },
  },
],
...
```

### Standalone

you will need to install the following

```bash
yarn add react-native-web react-native-reanimated
```

then you will need to add the following in the file `docusaurus.config.js`
```js
...
plugins: [
  '@gorhom/docusaurus-react-native-plugin',
  {
    alias: {
      '{MY PACKAGE NAME}': path.resolve(
        __dirname,
        {MY PACKAGE PATH}
      ),
      'react-native-reanimated': path.resolve(
        __dirname,
        'node_modules/react-native-reanimated'
      ),
    },
  },
],
...
```


## License
[MIT](./LICENSE)
