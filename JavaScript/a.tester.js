const puppeteer = require('puppeteer');

(async () => {

    let productUrl = 'https://www.amazon.com/Echo-Dot/dp/B07FZ8S74R/ref=gbps_img___31eb6093?smid=ATVPDKIKX0DER'


    let browser = await puppeteer.launch();
    let page = await browser.newPage();


    await page.goto(productUrl, {waitUntil: 'networkidle2'});

    let data = await page.evaluate(() => {

    let productName = document.querySelector('span#productTitle').innerText;
    let productRating = document.querySelector('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5').innerText;
    let productPrice = document.querySelector('#priceblock_ourprice').innerText;
    let ratingCount = document.querySelector('span#acrCustomerReviewText').innerText;

    return {
        productName,
        productRating,
        productPrice,
        ratingCount

    }


    });

    console.log(data)

    await browser.close();
})();
