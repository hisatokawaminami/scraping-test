const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    console.log(wikiUrls);
    // for(let x = 0; x<wikiUrls.length; x++){
    //   console.log()
    // }
  })
  .catch(function(err){
    //handle error
  });
