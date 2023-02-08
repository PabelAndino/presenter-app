module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['nativewind/babel'],
  env: {
    production: {
      plugins: ['closure-elimination', 'transform-remove-console'],
    },
  },
}
