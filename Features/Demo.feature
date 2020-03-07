Feature: Validate calculator functionalities


Scenario: Calculator Add Functionality

Given I will navigate to Calc Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"


Scenario: Calculator Add Functionality

Given I will navigate to Calc Site
When I add two numbers "2" and "7"
Then the output displayed should be "9"