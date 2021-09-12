const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.js")
const localExtend = require("../../tailwind.config")
const merge = require('lodash/merge');

const global = { ...defaultConfig.theme };
const extend = { ...localExtend.theme.extend };
const all = merge({}, defaultConfig.theme, localExtend.theme.extend);


module.exports = {
    global,
    extend,
    all,
    pages: [
        {
            id: "color",
            icon: `<path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path>`
        },
        {
            id: "animation",
            icon: `<path fill="currentColor" d="M2.529 2A.53.53 0 002 2.53V17.5a.5.5 0 00.5.5H3a.5.5 0 00.5-.5V2.518A.518.518 0 002.982 2h-.453zM8 2a1 1 0 00-1 1v14a1 1 0 001 1h1.44a1 1 0 001-.996l.056-14a1 1 0 00-1-1.004H8zm7 0a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1h-2z"/>`,
        },
        {
            id: "typography",
            icon: `<path fill="currentColor" fill-rule="nonzero" d="M17.053 8.451v.974c-.719-.852-1.456-1.218-2.466-1.218-2.037 0-3.61 1.742-3.61 4.009 0 2.303 1.556 4.027 3.644 4.027 1.028 0 1.764-.366 2.432-1.219v.975h2.069V8.451h-2.069zM8.562 13.54l.976 2.459h2.379L7.124 4.127H5.447L.5 15.999h2.362l1.027-2.459h4.673zm6.642-3.435c1.164 0 2.071.942 2.071 2.146 0 1.134-.941 2.094-2.071 2.094-1.148 0-2.09-.942-2.09-2.129 0-1.169.925-2.111 2.09-2.111zM7.86 11.712H4.608l1.66-4.186 1.592 4.186z"/>`
        },
        {
            id: "sizing",
            icon: `<path fill="currentColor" d="M18 11h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zM8 3v2c0 1.656-1.344 3-3 3H3v8a1 1 0 001 1h5v-5c0-1.656 1.345-3 3-3h5V4a1 1 0 00-1-1H8zM2 6h3.013c.112-.002.219-.022.319-.057l.012-.004A1 1 0 006 5V2a1 1 0 00-1-1H2a1 1 0 00-1 1v3a1 1 0 001 1z"/>`
        },
        {
            id: "borders",
            icon: `<path fill="currentColor" d="M2.529 2A.53.53 0 002 2.53V17.5a.5.5 0 00.5.5H3a.5.5 0 00.5-.5V2.518A.518.518 0 002.982 2h-.453zM8 2a1 1 0 00-1 1v14a1 1 0 001 1h1.44a1 1 0 001-.996l.056-14a1 1 0 00-1-1.004H8zm7 0a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1h-2z"/>`
        },
    ]
}