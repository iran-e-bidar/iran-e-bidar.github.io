const puppeteer = require('puppeteer');

async function testLinks() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const baseUrl = 'http://127.0.0.1:4000';
    const linksToTest = [
        // From English homepage
        { page: `${baseUrl}/en/`, links: [
            '/en/discussions/',
            '/en/issues/', 
            '/en/projects/',
            '/en/wiki/',
            '/en/pulls/',
            '/en/releases/'
        ]},
        // From Persian homepage
        { page: `${baseUrl}/fa/`, links: [
            '/fa/discussions/',
            '/fa/issues/',
            '/fa/projects/', 
            '/fa/wiki/',
            '/fa/pulls/',
            '/fa/releases/'
        ]}
    ];
    
    for (const testCase of linksToTest) {
        console.log(`\nTesting links on: ${testCase.page}`);
        await page.goto(testCase.page);
        
        for (const link of testCase.links) {
            try {
                const fullUrl = baseUrl + link;
                const response = await page.goto(fullUrl);
                const status = response.status();
                
                if (status === 200) {
                    console.log(`✅ ${link} - OK`);
                } else if (status === 404) {
                    console.log(`❌ ${link} - 404 NOT FOUND`);
                } else {
                    console.log(`⚠️  ${link} - Status: ${status}`);
                }
            } catch (error) {
                console.log(`❌ ${link} - ERROR: ${error.message}`);
            }
        }
    }
    
    await browser.close();
}

testLinks().catch(console.error);