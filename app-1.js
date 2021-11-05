import puppeteer from "puppeteer-extra";
import Recaptchaplugin from "puppeteer-extra-plugin-recaptcha"
import bypass from "./bypass/captchaBypasser.js"

puppeteer.use(
    Recaptchaplugin({
    provider:{fn:bypass,
    },
}));

puppeteer.launch({headless:false}).then(async (browser) => {
    const page = await browser.newPage(); 
    //page.setViewport({ width: 800, height: 600 })
    page.setViewport({width: 1366, height: 1000})
    await page.goto("https://jobs.lever.co/userlane/19b969e3-e406-486c-82e6-483f62fe597f/apply");

    
    await page.waitForSelector('input[type=file]');
    const inputUploadHandle = await page.$('input[type=file]');
    let fileToUpload = 'test.pdf';
    inputUploadHandle.uploadFile(fileToUpload);
    
    await page.type(':nth-child(1) > ul > :nth-child(2) > label > .application-field > input', 'Usha Lokanathan');

    await page.type(':nth-child(1) > ul > :nth-child(3) > label > .application-field > input', 'er.usha.lokanathan@gmail.com');

    await page.type(':nth-child(1) > ul > :nth-child(4) > label > .application-field > input', '+49-17643619156');

    await page.type(':nth-child(1) > ul > :nth-child(5) > label > .application-field > input', 'Muster');

    await page.type(':nth-child(3) > ul > .application-question > label > .application-field > .card-field-input', '01.11.2021');

    await page.click(':nth-child(4) > :nth-child(3) > .application-question > :nth-child(1) > .application-field');

    await page.type(':nth-child(5) > ul > .application-question > label > .application-field > .card-field-input', '70000');

    await page.click('[type="checkbox"]');

  

 
   // cy.get(':nth-child(4) > :nth-child(3) > .application-question > :nth-child(1) > .application-field').click()
   
   await delay(7000);

    console.log("Solving captcha.....");
    await page.solveRecaptchas();
    console.log("Captcha Solved");
    
    await delay(10000);
 
    

    await page.click('.last-section-apply > .postings-btn');

    
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

   

});