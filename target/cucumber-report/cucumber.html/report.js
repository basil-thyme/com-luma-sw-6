$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("women.feature");
formatter.feature({
  "line": 1,
  "name": "Women Test",
  "description": "As user I want to verify Sort By Filter on Women Page",
  "id": "women-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4882491200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify user should be able to verify Price in Low to High",
  "description": "",
  "id": "women-test;verify-user-should-be-able-to-verify-price-in-low-to-high",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Mouse Hover On Women Menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I Mouse Hover On Tops",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Click On Jackets",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select Sort By Filter \"Price\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to Verify that Product Size is displayed in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 191965700,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 733138100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 182652100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJackets()"
});
formatter.result({
  "duration": 1245888600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 25
    }
  ],
  "location": "WomenSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 1392289100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iShouldBeAbleToVerifyThatProductSizeIsDisplayedInLowToHigh()"
});
formatter.result({
  "duration": 866788500,
  "status": "passed"
});
formatter.after({
  "duration": 723572300,
  "status": "passed"
});
});