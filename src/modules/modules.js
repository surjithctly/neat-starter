const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.js")
const localExtend = require("../../tailwind.config")
const merge = require('lodash/merge');

module.exports = {
  global: { ...defaultConfig.theme },
  extend: { ...localExtend.theme.extend },
  all: merge({}, defaultConfig.theme, localExtend.theme.extend)
};
