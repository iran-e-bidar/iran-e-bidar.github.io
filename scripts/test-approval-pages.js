const puppeteer = require('puppeteer');
const path = require('path');

async function takeApprovalScreenshots() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1200, height: 800 });
    
    const baseUrl = 'http://127.0.0.1:4000';
    const pages = [
        { url: `${baseUrl}/en/approval-process/`, name: 'approval-en' },
        { url: `${baseUrl}/fa/approval-process/`, name: 'approval-fa' }
    ];
    
    console.log('Taking approval process screenshots...');
    
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
    console.log('All approval process screenshots completed!');
}

takeApprovalScreenshots().catch(console.error);