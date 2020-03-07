"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        require: [
            '.StepDefinitions/*.ts'
        ]
    }
};
