import { Config } from "protractor"; // Typescript syntax
var reporter = require('cucumber-html-reporter');  // JS syntax


export let config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,  /* Mode to run protractor tests without starting Selenium Server */
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

    // the double dot indicates to move up one directory
    specs: ['../Features/demo.feature'],
    cucumberOpts: {
        tags: '@smoke',
        /* Output the test results report in json format */
        format: 'json:./cucumberreport.json',
        /* metadata properties will appear in the HTML report */
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

}