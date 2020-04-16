
let { $, sleep } = require('./funcs');

let sleepTime = 500;
//let burlovChoices;  //Bisa bantu klo ada pesen iterable

module.exports = function () {

  this.Given(/^I am on the start page of Systembolaget$/, async function () {
    await sleep(sleepTime);
    await helpers.loadPage('https://www.systembolaget.se/');

    // I want to enter that I'm older than 20 olds
    let chooseAge = await $('button[data-ng-click="closeModalAndSetCookie()"]');
    chooseAge.click();
    await sleep(sleepTime * 2);

  });



  this.When(/^I want to check the opening hours of systembolaget in Burlöv Centrum$/, async function () {

    //This is when I click Öppettider menu
    await sleep(sleepTime * 2);
    // let choice = await driver.findElement(By.linkText("Öppettider"));
    // await choice.click();
    let choices = await $('a[href="/butiker-ombud/"]');

    for (let choice of choices) {
      let text = await choice.getText();

      if (text === 'Öppettider') {
        await choice.click();
        await sleep(sleepTime * 2);
        break;
      }
    }


    // This is when I choose Skåne län
    await sleep(sleepTime * 2);
    let skaneLink = await $('a[ng-click="countySearch(\'Skåne län\')"]');  // Harus ada tanda miring kiri ini \\ kl ada ekstra lg '' di dlm syntax, liat skåne län
    await skaneLink.click();                  //Cek syntax di bwh
    await sleep(sleepTime * 2);


    //This is when I choose Burlöv Centrum
    await sleep(sleepTime * 3);     //await ini mbantu kl ada pesen itrable,penting!
    let burlovChoices = await $('.first-col-text');

    for (let burlovChoice of burlovChoices) {
      let textBC = await burlovChoice.getText();

      if (textBC === 'Burlövs Centrum') {
        await burlovChoice.click();
        await sleep(sleepTime * 4);
        break;
      }

    }

  });



  this.When(/^I check on Kristi himmelsfärd day$/, async function () {

    // I click on Visa Fler button to find where is Kristi himmelsfärd day
    await sleep(sleepTime * 2);
    let visaFler = await $('.sb-btn');
    visaFler.click();
    await sleep(sleepTime);

  });



  this.Then(/^I can see it is closed on Kristi himmelsfärd day$/, async function () {
    await sleep(sleepTime);
    let kristiTexts = await $('.pull-right');

    for (let kristiText of kristiTexts) {
      let textKH = await kristiText.getText();
      console.log(textKH);

      if (textKH2 = textKH.includes('Kristi himmelfärd, Stängt')) {
        assert(textKH2, 'It should be closed on Kristi himmelfärd day and no alcohol on this holy day!!');
        await sleep;

        //If you want to be failed:
        // textKH3 = '10:00–19:00';
        // assert.equal(textKH2, textKH3, 'It should be closed on Kristi himmelfärd day and no alcohol on this holy day!!');
      }
    }

  });

}


//Kode ini utk milih skåne län jg
// let chooseRegions = await $('a[role="button"]');

    // for (let chooseRegion of chooseRegions) {
    //   let textSkane = await chooseRegion.getText();

    //   if (textSkane === 'Skåne län') {
    //     await chooseRegion.click();
    //     await sleep(sleepTime * 4);
    //     break;
    //   }

    // }