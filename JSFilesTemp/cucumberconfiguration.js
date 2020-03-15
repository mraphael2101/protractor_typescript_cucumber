"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require('cucumber-html-reporter');
exports.config = {
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    },
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        tags: '@smoke',
        format: 'json:./cucumberreport.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumber_report.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: [
            '../StepDefinitions/*.ts'
        ]
    }
};
