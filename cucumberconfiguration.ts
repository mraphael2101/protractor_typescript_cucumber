import { Config } from "protractor"

export let config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,  /* Mode to run protractor tests without starting Selenium Server */
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
    },

    // the double dot indicates to move up one directory
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        require: [
            '.StepDefinitions/*.ts'
        ]
    }

}