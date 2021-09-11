const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.js")
const localExtend = require("../../tailwind.config")
const merge = require('lodash/merge');


function stripAlpha(content) {
  return content.replace(/\D/g, '')
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

function select(config) {
  return {
    data: config.data,
    focusedOptionIndex: 0,
    open: false,
    options: null,
    placeholder: config.placeholder ?? 'Select an option',
    value: config.value,

    closeListbox: function () {
      this.open = false
      this.focusedOptionIndex = null
    },

    focusNextOption: function () {
      if (this.focusedOptionIndex === null)
        return this.focusedOptionIndex = Object
          .keys(this.options)
          .length - 1
      if (this.focusedOptionIndex + 1 >= Object.keys(this.options).length) return
      this.focusedOptionIndex++
      this
        .$refs
        .listbox
        .children[this.focusedOptionIndex]
        .scrollIntoView({ block: 'center' })
    },

    focusPrevOption: function () {
      if (this.focusedOptionIndex === null)
        return this.focusedOptionIndex = 0
      if (this.focusedOptionIndex <= 0) return
      this.focusedOptionIndex--
      this
        .$refs
        .listbox
        .children[this.focusedOptionIndex]
        .scrollIntoView({ block: 'center' })
    },

    init: function () {
      this.options = this.data
      if (!(this.value in this.options))
        this.value = null
    },

    selectOption: function () {
      if (!this.open)
        return this.toggleListboxVisibility()
      this.value = Object.keys(this.options)[this.focusedOptionIndex]
      this.closeListbox()
    },

    toggleListboxVisibility: function () {
      if (this.open)
        return this.closeListbox()
      this.focusedOptionIndex = Object
        .keys(this.options)
        .indexOf(this.value) || 0
      this.open = true

      this.$nextTick(() => {
        this
          .$refs
          .button
          .focus()

        this
          .$refs
          .listbox
          .children[this.focusedOptionIndex]
          .scrollIntoView({ block: 'center' })
      })
    }
  }
}