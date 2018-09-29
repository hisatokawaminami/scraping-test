const puppeteer = require('puppeteer');
const $ = require('cheerio');
var url = 'https://www.thecrocodile.com/calendar/';
var counter = 0;

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    //(replace .one-event with td)
    //make parser  .one-event
    $('td', html).each(function() {
      console.log("Does this work?"+$('h5').text());
      console.log("This is a breaking point "+counter+" "+$(this).text());
      console.log("   ");
      counter++;
    });
  })
  .catch(function(err) {
    console.log("didntwork");
  });
