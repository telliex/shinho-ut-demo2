const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

Given(/^I open Bing`s search page$/, () => {
  return client
    .url('https://www.bing.com/')
})

Given(/^I open Sogou search page$/, () => {
  return client
    .url('https://www.sogou.com/')
})

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})

Then(/^the Bing search form exists$/, () => {
  return client.assert.visible('input[name="q"]')
})

Then(/^the Sogou search form exists$/, () => {
  return client.assert.visible('input[id="query"]')
})
