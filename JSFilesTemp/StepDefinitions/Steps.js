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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const CalculatorHomePage_1 = require("../PageObjects/CalculatorHomePage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calcPageObjRef = new CalculatorHomePage_1.CalculatorHomePage();
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'Calc AngularJS Web App') {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calcPageObjRef.firstEditBox.sendKeys(string);
    yield calcPageObjRef.secondEditBox.sendKeys(string2);
    yield calcPageObjRef.goButton.click();
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calcPageObjRef.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
