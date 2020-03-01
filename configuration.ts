import { Config } from "protractor"

export let config: Config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,  /* Mode to run protractor tests without starting Selenium Server */

    capabilities: {
        browserName: 'chrome'
    },
    
    specs: ['testspec.js'],

    jasmineNodeOpts: {
        showColors: true,
    }

  };