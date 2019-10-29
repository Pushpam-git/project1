$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/Desktop/demosel/CaseStudy2/Feature/TestMe.feature");
formatter.feature({
  "name": "Login to TestMeApp",
  "description": "  User shall be able to login into app",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Test Me App page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.step({
  "name": "User inserts coorect \"\u003cusername\u003e\" and \"\u003cpass\u003e\" on login page",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User sees home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "pass"
      ]
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "User is on Test Me App page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestMeLogin.user_is_on_Test_Me_App_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin",
  "keyword": "And "
});
formatter.match({
  "location": "TestMeLogin.user_clicks_on_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inserts coorect \"lalitha\" and \"Password123\" on login page",
  "keyword": "When "
});
formatter.match({
  "location": "TestMeLogin.user_inserts_coorect_and_on_login_page(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "TestMeLogin.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees home page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestMeLogin.user_sees_home_page()"
});
formatter.result({
  "status": "passed"
});
});