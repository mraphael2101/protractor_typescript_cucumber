"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['testspec.js'],
    jasmineNodeOpts: {
        showColors: true,
    }
};
