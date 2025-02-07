import { test, expect } from '@playwright/test'

test.only("Learning selectors", async ({page}) => {
    //navigate to the webpage
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // 1 selecting by id
    await page.locator('#clickButton').click();

    // 2 selecting by class
    await page.locator('.button-style').click();

    // 3 by tag and class
    await page.locator('button.button-style').click();

    // 4 by attribute value
    await page.locator('[data-action="increment"]').click();

    // 5 Partial attribute
    await page.locator('[role*="but"]').click();

    // 6 by text content
    await page.locator('text=CLICK ME').click();
    
    // 7 Combine selectors for precision, class and text - find exact text match
    await page.locator('.button-style:text("CLICK ME")').click();
    
    // 8 Find elements containing specific text, has-text
    await page.locator('button:has-text("click m")').click();

    // 9 Attribute and text combination

    await page.locator('[data-action="increment"]:text("CLICK ME")').click();

    // 10 Playwright locators
    //get by text
    await page.getByText('click me').click();

    // 11 by role
    await page.locator('button', { name: /click Me/i }).click();

    //assert the counter
    await expect(page.locator('#counter')).toContainText('11');

});