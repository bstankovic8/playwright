import { test, expect } from '@playwright/test';


test.describe("Learn assertion @assertion_group", () => {
    test('Verify web page behavior @smoke', async({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');

        // 1 to have a url
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        // 2 to have title
        await expect(page).toHaveTitle('The Internet');
    })
    test('Continue with assertions', async ({page}) => {
        // 3 assert visibility
        await page.goto('https://the-internet.herokuapp.com/');

        await expect(page.locator('h1')).toBeVisible();

        // 4 element to have text assert
        await expect(page.locator('h2')).toHaveText('Available Examples');

        // 5 assertion that contains text
        await expect(page.locator('body')).toContainText('WYSIWYG Editor');

    })
    test('Continue with assertions part2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');

        // 6 assert count
        await expect(page.locator('a[href]')).toHaveCount(46)
        
        // 7 to be checked
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.waitForTimeout(1000);
        await page.waitForLoadState('networkidle');
        let checkbox = await page.getByRole('checkbox').nth(0)
        await checkbox.waitFor();
        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();
        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
    })
    test('Continue with assertions part3', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login');

        // 8 have value
        await page.locator('#username').fill('tomsmith');
        await page.locator('#password').fill('SuperSecretPassword!')
        await expect(page.locator('#username')).toHaveValue('tomsmith');
        await expect(page.locator('#password')).toHaveValue('SuperSecretPassword!');

        //9 element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
        //await expect(page.locator('button=[type="submit"]')).toBeDisabled();
    })
    test('Continue with assertions part4', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com');

        // 10 store text in variable and then verify content

        const headerText = await page.locator('h1').textContent()
        expect(headerText).toBe('Welcome to the-internet')

    })
})