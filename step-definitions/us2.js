let { $, sleep } = require('./funcs');

let sleepTime = 500;

module.exports = function () {

  this.Given(/^I go to the systembolaget page$/, async function () {
    await sleep(sleepTime);
    await helpers.loadPage('https://www.systembolaget.se/');

    // I want to enter that I'm older than 20 olds
    let chooseAge = await $('button[data-ng-click="closeModalAndSetCookie()"]');
    chooseAge.click();
    await sleep(sleepTime * 2);

  });



  this.When(/^I search 'ballast' on the search field$/, async function () {
    await sleep(sleepTime * 2);
    let insertSearchField2 = await $('#ProductSearchTextInput');
    //let searchFieldInsert = await $('input[placeholder="Sök dryck, land, varunummer, druva..."]');
    await insertSearchField2.sendKeys('ballast');
    await sleep(sleepTime * 2);

    // I click on the search button
    let clikSearch = await $('.icon.icon-search');
    await sleep(sleepTime * 2);
    clikSearch.click();
    await sleep(sleepTime * 2);

  });



  this.Then(/^I can see how many assortment of ballast drinks via sortimentet$/, async function () {
    await sleep(sleepTime * 2);
    let numberSort = await $('.all-hits');
    //let numberButik = await $('span.ng-binding');
    //let numberButik = await $('a[data-ng-click="searchFullAssortment()"]');
    let text = await numberSort.getText();
    assert.equal(text, 'I HELA SORTIMENTET (12)', 'It is wrong result via sortimentet');
    await sleep(sleepTime * 2);

  });



  this.Then(/^I can see how many assortment of ballast drinks via boutique$/, async function () {
    await sleep(sleepTime * 2);
    let numberButik = await $('.store-hits');
    //let numberButik = await $('span.ng-binding');
    //let numberButik = await $('a[data-ng-click="searchFullAssortment()"]');
    numberButik.click();
    await sleep(sleepTime * 5);
    let text = await numberButik.getText();
    assert.equal(text, 'BUTIK/OMBUD (10)', 'It is wrong result via boutique');
    await sleep(sleepTime * 2);

  });


}
