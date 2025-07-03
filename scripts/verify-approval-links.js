const puppeteer = require('puppeteer');

async function verifyApprovalLinks() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    const baseUrl = 'http://127.0.0.1:4000';
    const tests = [
        { url: `${baseUrl}/en/`, linkPath: '/en/approval-process/', name: 'English' },
        { url: `${baseUrl}/fa/`, linkPath: '/fa/approval-process/', name: 'Persian' }
    ];
    
    console.log('Verifying approval process links...\n');
    
    for (const test of tests) {
        console.log(`=== Testing ${test.name} Homepage ===`);
        
        try {
            await page.goto(test.url);
            
            // Check if the approval link exists with correct href
            const approvalLink = await page.$(`a.step.highlight[href="${test.linkPath}"]`);
            
            if (approvalLink) {
                console.log(`✅ ${test.name} approval link found with correct href: ${test.linkPath}`);
                
                // Check if the target page exists
                const response = await page.goto(baseUrl + test.linkPath);
                if (response.status() === 200) {
                    console.log(`✅ ${test.name} approval process page loads successfully`);
                } else {
                    console.log(`❌ ${test.name} approval process page failed - Status: ${response.status()}`);
                }
            } else {
                console.log(`❌ ${test.name} approval link not found or incorrect href`);
            }
            
        } catch (error) {
            console.log(`❌ Error testing ${test.name}: ${error.message}`);
        }
        
        console.log('');
    }
    
    await browser.close();
    console.log('Verification completed!');
}

verifyApprovalLinks().catch(console.error);