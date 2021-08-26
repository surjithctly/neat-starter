const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.js")
const localExtend = require("../../tailwind.config")
const merge = require('lodash/merge');


function stripAlpha(content) {
  return content.replace(/\D/g,'')
}

// const preProcessedSpacingList = Object.values(defaultConfig.theme.spacing)
// const remValues = preProcessedSpacingList.filter(item => item.includes('rem'))
// const convertedRemValues = 
// const remSpacingValues = preProcessedSpacingList.indexOf('rem');

// console.log(remValues);


module.exports = {
  global: { ...defaultConfig.theme },
  extend: { ...localExtend.theme.extend },
  all: merge({}, defaultConfig.theme, localExtend.theme.extend)
};
