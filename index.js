// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;
// const app = express();

// app
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .get('/test', (req, res) => res.render('pages/test'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const puppeteer = require('puppeteer');

let scrape = async () => {
  let step = 0;

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  let rndStr = Math.random().toString(36).substr(2, 5);
  await page.goto('http://adrianafurniture.oxmedia.com.pl/pl/21-meble-funkcyjne');
  //await page.setViewport({width: 2*1000, height: 2*1000});
  //await page.waitFor(2*1000);
  page.waitForNavigation({ waitUntil: 'networkidle2' });
  if (await page.$('#rodoDisagree') !== null){
    await page.click('#rodoDisagree');
  }
  await page.waitFor(2*1000);
  await page.click('#itcFotel');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('#itcSofa');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('#itcNaroznik');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('.checkGroup div:nth-of-type(1)');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('.checkGroup div:nth-of-type(2)');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('.checkGroup div:nth-of-type(3)');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });

  await page.click('#itcFotel');
  await page.waitFor(2*1000);
  await page.click('#itcSofa');
  await page.waitFor(2*1000);
  await page.click('#itcNaroznik');
  await page.waitFor(2*1000);
  await page.click('.checkGroup div:nth-of-type(1)');
  await page.waitFor(2*1000);
  await page.click('.checkGroup div:nth-of-type(2)');
  await page.waitFor(2*1000);
  await page.click('.checkGroup div:nth-of-type(3)');
  await page.waitFor(2*1000);
  await page.screenshot({ path: 'screenshots/ada_'+rndStr+'_step_'+(step += 1)+'.png', fullPage: true, type: 'jpeg', quality: 75 });
//   const result = await page.evaluate(() => {
//     let title = document.querySelector('.badania-container h2').innerText;
//     let price = document.querySelector('.packages-all-container div:first-child .item_right .price').innerText;

//     return {
//         title,
//         price
//     };

// });

  browser.close();
  //return result;
}

scrape().then((value) => {
  //console.log(value); // Success!
});

//test();
