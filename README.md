<h1>Puppeteer automation</h1>
<h3>Description</h3>
<p>This automation has been developed using Puppeteer Framework which is an alternative for Cypress framework. python based library was used to automate hCaptcha</p>
<p><b>Used Plugins: </b>puppeteer-extra and puppeteer-extra-plugin-recaptcha. Python shell also used.</p>

<h3>How to use</h3>
<p>Please make sure that you have node package manager or yarn package manager and node.js - 10 above in your machine</p>
<pre><code>git clone https://github.com/UshaLokanathan/hcaptchaBypass.git</code></pre>
<pre><code>cd hcaptchaBypass</code></pre>
<pre><code>npm install</code></pre>
<pre><code>node .\app.js</code></pre>
<h3>Captcha Code</h3>
<pre><code>
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
    page.setViewport({width: 1366, height: 1000})
    await page.goto("Your Captcha URL");
    console.log("Solving captcha.....");
    await page.solveRecaptchas();
    console.log("Captcha Solved");
</code></pre>
