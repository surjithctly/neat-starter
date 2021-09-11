const Color = require('color');

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

function displayAsDefault(content) {
    content.map((e) => {
        if (key === 'DEFAULT') {
            e.classList.add('default')
        }
    })
}

function hexToRgb(hexValue, asCmyk) {
    const strippedHex = hexValue.replace('#', '');
    const r = parseInt(strippedHex.substring(0, 2), 16);
    const g = parseInt(strippedHex.substring(2, 4), 16);
    const b = parseInt(strippedHex.substring(4, 6), 16);

    if (asCmyk) {
        return rgbToCmyk(r, g, b)
    }
    return `rgb(${r}, ${g}, ${b})`;
}

// function rgbToCmyk(r, g, b) {
//     var c = 1 - (r / 255);
//     var m = 1 - (g / 255);
//     var y = 1 - (b / 255);
//     var k = Math.min(c, Math.min(m, y));

//     c = Math.round(c * 10000) / 100;
//     m = Math.round(m * 10000) / 100;
//     y = Math.round(y * 10000) / 100;
//     k = Math.round(k * 10000) / 100;

//     c = isNaN(c) ? 0 : c;
//     m = isNaN(m) ? 0 : m;
//     y = isNaN(y) ? 0 : y;
//     k = isNaN(k) ? 0 : k;

//     // return {
//     //     c: c,
//     //     m: m,
//     //     y: y,
//     //     k: k
//     // }
//     return `cmyk(${c},${m},${y},${k})`
// }

function rgbToCmyk(r, g, b, normalized) {
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    // return {
    //     c: c,
    //     m: m,
    //     y: y,
    //     k: k
    // }
    return `cmyk(${c},${m},${y},${k})`
}


function getContrastYIQ(hexValue) {
    const strippedHex = hexValue.replace('#', '');
    var r = parseInt(strippedHex.substr(0, 2), 16);
    var g = parseInt(strippedHex.substr(2, 2), 16);
    var b = parseInt(strippedHex.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'text-gray-600' : 'text-gray-200';
};

const getColorSpacesFromHex = (hexvalue, request) => {
    const base = Color(hexvalue);
    const resultArr = new Array;
    request.forEach((colorspace) => {
        switch (colorspace) {
            case 'cmyk': resultArr.push(base.cmyk());
            // case 'rgb': resultArr.push(base.rgb());
            case 'hsl': resultArr.push(base.hsl().toString());
        }
    })
    return resultArr;
}


function buildSectionToc(content, el) {
    let sectionHeadingsEl = content.querySelector(el);
    let sectionHeadings = content.querySelectorAll('h2');
    let sectionHeadingsList = [];
    sectionHeadings.forEach((sectionHeading) => {
        var headingAsLink = `<a href="#${sectionHeading.id}">${sectionHeading.id}</a>`;
        sectionHeadingsList.push(headingAsLink);
    })
    sectionHeadingsEl.innerHTML = sectionHeadingsList;
};

module.exports = {
    getTypeof,
    sortNumerically,
    toArray,
    camelCase,
    stripAlpha,
    remToPx,
    buildSectionToc,
    displayAsDefault,
    hexToRgb,
    rgbToCmyk,
    getContrastYIQ,
    getColorSpacesFromHex
}