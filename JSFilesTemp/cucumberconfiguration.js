"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        tags: "@smoke",
        require: [
            './StepDefinitions/*.ts'
        ]
    }
};
