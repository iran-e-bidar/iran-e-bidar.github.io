const puppeteer = require('puppeteer');

async function testAllStagePages() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const baseUrl = 'http://127.0.0.1:4000';
    const stagePages = [
        // English pages
        { url: `${baseUrl}/en/discuss-stage/`, name: 'English Discuss' },
        { url: `${baseUrl}/en/propose-stage/`, name: 'English Propose' },
        { url: `${baseUrl}/en/review-stage/`, name: 'English Review' },
        { url: `${baseUrl}/en/approval-process/`, name: 'English Approval' },
        { url: `${baseUrl}/en/release-stage/`, name: 'English Release' },
        // Persian pages
        { url: `${baseUrl}/fa/discuss-stage/`, name: 'Persian Discuss' },
        { url: `${baseUrl}/fa/propose-stage/`, name: 'Persian Propose' },
        { url: `${baseUrl}/fa/review-stage/`, name: 'Persian Review' },
        { url: `${baseUrl}/fa/approval-process/`, name: 'Persian Approval' },
        { url: `${baseUrl}/fa/release-stage/`, name: 'Persian Release' }
    ];
    
    console.log('Testing all stage pages...\n');
    
    for (const stagePage of stagePages) {
        try {
            console.log(`Testing: ${stagePage.name}`);
            const response = await page.goto(stagePage.url);
            
            if (response.status() === 200) {
                console.log(`✅ ${stagePage.name} - Page loads successfully`);
            } else {
                console.log(`❌ ${stagePage.name} - Failed with status: ${response.status()}`);
            }
        } catch (error) {
            console.log(`❌ ${stagePage.name} - Error: ${error.message}`);
        }
    }
    
    // Test clickable links from homepage
    console.log('\n=== Testing Homepage Process Flow Links ===');
    
    const homepageTests = [
        { url: `${baseUrl}/en/`, name: 'English Homepage' },
        { url: `${baseUrl}/fa/`, name: 'Persian Homepage' }
    ];
    
    for (const test of homepageTests) {
        console.log(`\nTesting links from: ${test.name}`);
        await page.goto(test.url);
        
        // Check if all process step links exist
        const stepLinks = await page.$$('a.step');
        console.log(`Found ${stepLinks.length} clickable process steps`);
        
        if (stepLinks.length === 5) {
            console.log(`✅ ${test.name} - All 5 process steps are clickable`);
        } else {
            console.log(`⚠️  ${test.name} - Expected 5 clickable steps, found ${stepLinks.length}`);
        }
    }
    
    await browser.close();
    console.log('\nAll stage page testing completed!');
}

testAllStagePages().catch(console.error);