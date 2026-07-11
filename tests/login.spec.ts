import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await expect(page).toHaveTitle(/Swag Labs/);

  await page.getByPlaceholder('Username').fill('standard_user'); 
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);

});

test('invalid login shows error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');
  await page.getByRole('button', { name: 'Login' }).click();
 
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});



