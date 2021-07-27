
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

function sortNumerically(numberArray) {
    numberArray.sort(function (a, b) {
        return a - b;
    });
};

module.exports = {
    getTypeof,
    sortNumerically
};