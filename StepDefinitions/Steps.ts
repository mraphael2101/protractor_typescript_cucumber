import { Given, When, Then } from "cucumber";
import { CalculatorHomePage } from "../PageObjects/CalculatorHomePage";
import { browser } from "protractor";
import chai from "chai";

var expect = chai.expect;
let calcPageObjRef = new CalculatorHomePage();


Given('I will navigate to {string} Site', async (string) => {
    if (string == 'Calc AngularJS Web App') {
        await browser.get("http://juliemr.github.io/protractor-demo");
    }
});


When('I add two numbers {string} and {string2}', async (string, string2) => {
    await calcPageObjRef.firstEditBox.sendKeys(string);
    await calcPageObjRef.firstEditBox.sendKeys(string2);
});


Then('the output displayed should be {string}', async (string) => {
    await calcPageObjRef.getResult.getText().then(function (text) {

        /* Cucumber does not support Jasmine Assertions. If you are using Cucumber then you should
        aim to use Chai Assertions. The three core methods of Chai are Should, Expect, and Assert */
        expect(text).to.equal(string);
    });

    
});