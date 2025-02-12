import { test, expect } from '@playwright/test';

test('This was generated by codegen', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('65');
});