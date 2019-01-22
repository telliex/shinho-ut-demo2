Feature: Bing Search

Scenario: Searching Bing

  Given I open Bing`s search page
  Then the title is "微软 Bing 搜索 - 国内版"
  And the Bing search form exists

Scenario: Searching Bing again

  Given I open Bing`s search page
  Then the title is "微软 Bing 搜索 - 国内版"
  And the Bing search form exists
