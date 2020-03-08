import { ElementFinder, element, by } from "protractor";

export class CalculatorHomePage
{
    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    goButton:ElementFinder;
    getResult:ElementFinder;

    constructor()
    {
        this.firstEditBox  = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.goButton      = element(by.id("gobutton"));
        this.getResult     = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"))
    }
}
