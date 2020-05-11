/**
 * @typedef { import("@vadistic/babel-preset").BabelPresetOptions } Options
 */

/**
 *
 * @type Options
 */
const options = {
  node: false,
  dev: true,
  esm: false,

  env: true,
  typescript: true,
  react: true,
}

module.exports = {
  presets: [['@vadistic/babel-preset', options], '@emotion/babel-preset-css-prop'],
  plugins: [['emotion']],
}
