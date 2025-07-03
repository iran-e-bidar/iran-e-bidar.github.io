const puppeteer = require('puppeteer');

async function testApprovalLinks() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const baseUrl = 'http://127.0.0.1:4000';
    
    console.log('Testing approval process links...');
    
    // Test English homepage link
    console.log('\n=== Testing English Homepage ===');
    await page.goto(`${baseUrl}/en/`);
    
    // Check if the approval link exists
    const enApprovalLink = await page.$('a.step.highlight[href="/en/approval-process/"]');
    if (enApprovalLink) {
        console.log('✅ English approval link found in process flow');
        
        // Click the link and verify it works
        await enApprovalLink.click();
        await page.waitForTimeout(1000);
        
        const currentUrl = page.url();
        if (currentUrl.includes('/en/approval-process/')) {
            console.log('✅ English approval link works correctly');
        } else {
            console.log('❌ English approval link failed - URL:', currentUrl);
        }
    } else {
        console.log('❌ English approval link not found');
    }
    
    // Test Persian homepage link
    console.log('\n=== Testing Persian Homepage ===');
    await page.goto(`${baseUrl}/fa/`);
    
    const faApprovalLink = await page.$('a.step.highlight[href="/fa/approval-process/"]');
    if (faApprovalLink) {
        console.log('✅ Persian approval link found in process flow');
        
        // Click the link and verify it works
        await faApprovalLink.click();
        await page.waitForTimeout(1000);
        
        const currentUrl = page.url();
        if (currentUrl.includes('/fa/approval-process/')) {
            console.log('✅ Persian approval link works correctly');
        } else {
            console.log('❌ Persian approval link failed - URL:', currentUrl);
        }
    } else {
        console.log('❌ Persian approval link not found');
    }
    
    await browser.close();
    console.log('\nLink testing completed!');
}

testApprovalLinks().catch(console.error);