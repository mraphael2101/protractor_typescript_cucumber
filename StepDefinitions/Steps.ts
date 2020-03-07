import { Given, When, Then } from "cucumber"; 
import { Calculator } from "../PageObjects/Calculator";
import { browser } from "protractor";


let calcPageObjRef = new Calculator();


Given('I will navigate to Calc Site', async ()=> {
    await browser.get("http://juliemr.github.io/protractor-demo");
});


When('I add two numbers {string} and {string2}', async (string, string2)=> {
    await calcPageObjRef.firstEditBox.sendKeys(string);
    await calcPageObjRef.firstEditBox.sendKeys(string2);
});


Then('the output displayed should be {string}', async (string)=> {
    await calcPageObjRef.getResult.getText().then(function(text) {
        console.log(text);
    });

    
});