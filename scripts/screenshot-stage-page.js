const puppeteer = require('puppeteer');
const path = require('path');

async function screenshotStagePage() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    
    const baseUrl = 'http://127.0.0.1:4000';
    const url = `${baseUrl}/en/discuss-stage/`;
    
    console.log(`Taking screenshot of ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    const screenshotPath = path.join(__dirname, '..', 'screenshots', 'discuss-stage-en.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    console.log(`Screenshot saved: ${screenshotPath}`);
    
    await browser.close();
}

screenshotStagePage().catch(console.error);