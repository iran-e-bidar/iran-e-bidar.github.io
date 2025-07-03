const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshots() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1200, height: 800 });
    
    const baseUrl = 'http://127.0.0.1:4000';
    const pages = [
        { url: `${baseUrl}/`, name: 'home' },
        { url: `${baseUrl}/en/`, name: 'home-en' },
        { url: `${baseUrl}/fa/`, name: 'home-fa' },
        { url: `${baseUrl}/en/discussions/`, name: 'discussions-en' },
        { url: `${baseUrl}/fa/discussions/`, name: 'discussions-fa' },
        { url: `${baseUrl}/en/issues/`, name: 'issues-en' },
        { url: `${baseUrl}/fa/issues/`, name: 'issues-fa' }
    ];
    
    console.log('Taking screenshots...');
    
    for (const pageInfo of pages) {
        try {
            console.log(`Taking screenshot of ${pageInfo.url}`);
            await page.goto(pageInfo.url, { waitUntil: 'networkidle0' });
            
            // Take screenshot
            const screenshotPath = path.join(__dirname, '..', 'screenshots', `${pageInfo.name}.png`);
            await page.screenshot({ path: screenshotPath, fullPage: true });
            
            console.log(`Screenshot saved: ${screenshotPath}`);
        } catch (error) {
            console.error(`Error taking screenshot of ${pageInfo.url}:`, error.message);
        }
    }
    
    await browser.close();
    console.log('All screenshots completed!');
}

takeScreenshots().catch(console.error);