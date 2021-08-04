
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

function sortNumerically(numberArray) {
    numberArray.sort(function (a, b) {
        return a - b;
    });
};

// // const sortableProperties = {
// //     "width": "hi"
// // }

// function sortAsc(sortableGroup) {
//     const remValues = Object.values(sortableGroup);
//     remValues.forEach((remValue) => {
//         remValue = parseFloat((remValue.replace('rem', ''))) * 4;
//         remValues
//     })
//     // const convertedRemValues = 
//     // const groupAsArray = Object.entries(sortableGroup);
//     // const remVals = groupAsArray.filter(([key, value]) => !value.includes('px'));
//     // const convertedRemVals = Object.values((remVals).trim('rem') * 4);
//     // const pxVals = groupAsArray.filter(([key, value]) => value.includes('px'));
// //    console.log(remValues);
// };

module.exports = {
    getTypeof,
    sortNumerically,
    toArray,
    // sortAsc
};