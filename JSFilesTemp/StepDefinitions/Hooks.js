"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@smoke" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@smoke" }, function () {
    console.log("@smoke test completed");
});
cucumber_1.Before({ tags: "@regression" }, function () {
    console.log("I need to do this step first for regression tests");
});
