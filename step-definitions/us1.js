let { $, sleep } = require('./funcs');

let sleepTime = 500;

module.exports = function () {

    this.Given(/^that I'm on the systembolaget page$/, async function () {
        await sleep(sleepTime);
        await helpers.loadPage('https://www.systembolaget.se/');

        // I want to enter that I'm older than 20 olds
        let chooseAge = await $('button[data-ng-click="closeModalAndSetCookie()"]');
        chooseAge.click();
        await sleep(sleepTime * 2);

    });



    this.When(/^I enter anchor steam on the search field$/, async function () {
        await sleep(sleepTime * 2);
        let insertSearchField = await $('#ProductSearchTextInput');
        //let searchFieldInsert = await $('input[placeholder="Sök dryck, land, varunummer, druva..."]');
        await insertSearchField.sendKeys('anchor steam');
        await sleep(sleepTime * 2);

        // I click on the search button
        let clikSearch = await $('.icon.icon-search');
        await sleep(sleepTime * 2);
        clikSearch.click();
        await sleep(sleepTime * 2);

    });



    this.When(/^I choose Anchor Steam Beer$/, async function () {
        await sleep(sleepTime * 2);
        //let chooseTheDrink = await $('a[href="/dryck/ol/anchor-steam-beer-157503"]');
        let chooseTheDrink = await $('.elm-product-list-item-full-info');
        chooseTheDrink.click();
        await sleep(sleepTime * 2);

    });



    this.Then(/^the drink description is shown$/, async function () {
        await sleep(sleepTime * 2);
        let drinkDescript = await $('p.description ');
        let text = await drinkDescript.getText();
        text = text.slice(0, 52);
        assert.equal(text, 'Maltig, fruktig smak med inslag av torkade aprikoser', 'Wrong description about Anchor steam beer!');
        await sleep(sleepTime * 2);
    });

}

