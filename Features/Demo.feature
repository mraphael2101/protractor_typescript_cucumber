Feature: Validate calculator functionalities

@smoke
Scenario: Calculator Add Functionality

Given I will navigate to "Calc AngularJS Web App" Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

@smoke
Scenario Outline: Calculator Add Functionality

Given I will navigate to "Calc AngularJS Web App" Site
When I add two numbers "2" and "7"
Then the output displayed should be "<key>"

Examples:
| key |
| 9 |
| 5 |