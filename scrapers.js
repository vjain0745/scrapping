const puppet = require("puppeteer");


async function scrapeAmazon(_url) {
    const browzer = await puppet.launch();
    const page = await browzer.newPage();
    await page.goto(_url);
    const a =[9 || 8 || 13 || 7||10 || 3]
    const [img] = await page.$x(`//*[@id="a-autoid-${a}-announce"]/img`)
    const imgsrc = await img.getProperty('src');
    const imgval = await imgsrc.jsonValue();

    const [tit] = await page.$x('//*[@id="productTitle"]');
    const titleval = await tit.getProperty('textContent');
    const titlval = await titleval.jsonValue();
    const title = await titlval.replace("//n ", '').trim();

    const [des] = await page.$x('//*[@id="productDescription"]/p');
    const desval = await des.getProperty('textContent');
    const descval = await desval.jsonValue();
    const description = await descval.replace("//n ", '').trim();

    browzer.close;
    console.log({ title, description, imgval });
    return({ title, description, imgval })
}


async function scrapeChannel(_url) {
    const browzer = await puppet.launch();
    const page = await browzer.newPage();
    await page.goto(_url);
    const [img] = await page.$x(`//*[@id="img"]`)
    const imgsrc = await img.getProperty('src');
    const imgval = await imgsrc.jsonValue();

    const [tit] = await page.$x('//*[@id="text-container"]');
    const titleval = await tit.getProperty('textContent');
    const titlval = await titleval.jsonValue();
    const title = await titlval.replace("//n ", '').trim();

    const [des] = await page.$x('//*[@id="subscriber-count"]');
    const desval = await des.getProperty('textContent');
    const descval = await desval.jsonValue();
    const subscribers = await descval.replace("//n ", '').trim();

    browzer.close;
    console.log({ title,subscribers, imgval });
    return({ title, subscribers, imgval })
}




module.exports = {scrapeAmazon,
    scrapeChannel
}