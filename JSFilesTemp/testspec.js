"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./PageObjects/Calculator");
describe('Chain Locators Protractor Demo', () => {
    it('Chain Locators Demo', () => __awaiter(void 0, void 0, void 0, function* () {
        let calcPageObjRef = new Calculator_1.Calculator();
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo");
        yield calcPageObjRef.firstEditBox.sendKeys("3");
        yield calcPageObjRef.secondEditBox.sendKeys("5");
        yield calcPageObjRef.goButton.click();
        calcPageObjRef.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
});
