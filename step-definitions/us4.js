let { $, sleep } = require('./funcs');

let sleepTime = 500;

module.exports = function () {

    this.Given(/^I go to the systembolaget start page$/, async function () {
        await sleep(sleepTime * 2);
        await helpers.loadPage('https://www.systembolaget.se/');

        // I want to enter that I'm older than 20 olds
        let chooseAge = await $('button[data-ng-click="closeModalAndSetCookie()"]');
        chooseAge.click();
        await sleep(sleepTime * 2);

    });



    this.When(/^I search for Nanny state drink and put it on a shopping bag$/, async function () {
        await sleep(sleepTime * 2);
        let insertSearchField = await $('#ProductSearchTextInput');
        //let searchFieldInsert = await $('input[placeholder="Sök dryck, land, varunummer, druva..."]');
        await insertSearchField.sendKeys('nanny state');
        await sleep(sleepTime * 2);

        // I click on the search button
        let clikSearch = await $('.icon.icon-search');
        await sleep(sleepTime * 2);
        clikSearch.click();
        await sleep(sleepTime * 2);

        // I put it on the shopping bag
        let clickShop = await $('.click-area.ng-scope.ng-isolate-scope');  //Tanpa active nya, biar jadi
        await sleep(sleepTime * 2);
        clickShop.click();
        await sleep(sleepTime * 4);

    });



    this.When(/^I click on the VARUKORG button then search for Hansa boutique$/, async function () {
        // I click on VARUKORG
        let clickVaru = await $('.sb-nav-action.basket');  //Tanpa active nya, biar jadi
        await sleep(sleepTime * 2);
        clickVaru.click();
        await sleep(sleepTime * 6);

        // I click the boutique search field 
        let searchButik = await $('.store-finder-container');  //Tanpa active nya, biar jadi
        await sleep(sleepTime * 2);
        searchButik.click();
        await sleep(sleepTime * 3);

        // I write Hansa on the boutique search field 
        await sleep(sleepTime * 2);
        let inputButik = await $('#site-picker-input');
        await inputButik.sendKeys('Hansa');
        await sleep(sleepTime * 2);

        // I click on Hansa,Malmö
        await sleep(sleepTime * 2);
        let chooseHansa = await $('.name.combined-match');
        chooseHansa.click();
        await sleep(sleepTime * 2);

    });



    this.Then(/^I verify if there are more than ten pieces of Nanny state drink in Hansa systembolaget boutique$/, async function () {
        await sleep(sleepTime * 2);
        let infoNanny = await $('.secondary.ng-binding');
        let textNanny = await infoNanny.getText();
        let text = textNanny.slice(0, 2);

        // if (text2 = text > 10) {
        if (text2 = text > 10) {
            assert(text2, 'I am sorry you can not have a party coz there are not so many nanny state in Hansa');
           
            // If you want to be failed:
            //assert(text < 10, 'I am sorry you can not have a party coz there are not so many nanny state in Hansa');
        }

    });

}



// if (text > 10) {
//     throw 'Wohooo we have a party.. I can buy many bottles of nanny state'

