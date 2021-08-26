
"use strict";

// External modules
// const elasticlunr = require("elasticlunr");

// ███████╗██╗██╗     ████████╗███████╗██████╗ ███████╗
// ██╔════╝██║██║     ╚══██╔══╝██╔════╝██╔══██╗██╔════╝
// █████╗  ██║██║        ██║   █████╗  ██████╔╝███████╗
// ██╔══╝  ██║██║        ██║   ██╔══╝  ██╔══██╗╚════██║
// ██║     ██║███████╗   ██║   ███████╗██║  ██║███████║
// ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝

/**
 * Get an entity's primitive data type
 * @param  {entity} | entity | The entity whose data type you wish to know
 * @return {String} | The thing's primitive data type
 */
function getTypeof(entity) {
    return typeof entity;
}

function toArray(object) {
    return Object.entries(object);
}

function getElements(selectorString) {
    const results = [

    ]
    // return document.querySelectorAll(selectorArray);
    return selectorString;
}

function camelCase(string) {
    return string.replace(/-([a-z])/g, (g) => { 
        return g[1].toUpperCase(); 
    });
}

function stripAlpha(content) {
    return content.replace(/[^0-9.]/g, '');
}

function remToPx(remValue) {
    return `${remValue * 16}px`
}

function sortNumerically(numberArray) {
    numberArray.sort(function (a, b) {
        return a - b;
    });
};

module.exports = {
    getTypeof,
    sortNumerically,
    toArray,
    camelCase,
    stripAlpha,
    remToPx
}