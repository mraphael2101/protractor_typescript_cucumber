import { After, Before, Status } from 'cucumber';
import { browser } from 'protractor';


Before({tags:"@smoke"}, function () {
    browser.manage().window().maximize();
})


/* Capture a screenshot for every scenario and not for a specific tag using
   the scenario object for the scenario that was just run */
After(async function (scenario) {
    if(scenario.result.status===Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"impage/png");
    }
    else
    {
        console.log("@smoke test completed");
    }
})


Before({tags:"@regression"}, function () {
    console.log("I need to do this step first for regression tests");
})