Feature: Sogou Search

Scenario: Searching Sogou

  Given I open Sogou search page
  Then the title is "搜狗搜索引擎 - 上网从搜狗开始"
  And the Sogou search form exists

Scenario: Searching Sogou again

  Given I open Sogou search page
  Then the title is "搜狗搜索引擎 - 上网从搜狗开始"
  And the Sogou search form exists
