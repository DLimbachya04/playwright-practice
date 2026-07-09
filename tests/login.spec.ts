import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  // your code here
  await expect(page).toHaveTitle(/Swag Labs/);

  await page.getByPlaceholder('Username').fill('standard_user'); 
});


