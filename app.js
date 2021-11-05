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
    await page.goto("https://jobs.lever.co/userlane/19b969e3-e406-486c-82e6-483f62fe597f/apply");
    console.log("Solving captcha.....");
    await page.solveRecaptchas();
    console.log("Captcha Solved"); 

});