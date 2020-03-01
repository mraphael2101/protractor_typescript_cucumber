/* To get the below Protractor classes to work in Typescript you must import them from protractor package.
If this was JS and not TS it would not be necessary to perform the import */
import { browser, element, by } from "protractor"
import { Calculator } from "./PageObjects/Calculator"


describe('Chain Locators Protractor Demo', ()=> {

	// In order to use the await function you have to add async keyword next to flat pipe (anonymous function)
	it('Chain Locators Demo', async()=> {

		let calcPageObjRef = new Calculator();
		
		browser.get("http://juliemr.github.io/protractor-demo");

		await calcPageObjRef.firstEditBox.sendKeys("3");
		await calcPageObjRef.secondEditBox.sendKeys("5")/*.then(browser.sleep(5000))*/;
		await calcPageObjRef.goButton.click();

		/* Whenever you identify a Angular tag with the name ng-repeater you can use the Protractor locator.
		Otherwise known as limiting the search scope. Below is an example of a parent and child element or sub-element.
		Remember, if you are retrieving something from the browser and printing it to the console, JS is asynchronous so you must use .then()  */
		calcPageObjRef.getResult.getText().then(function(text) {
			
			console.log(text);
		
		});

	})

})