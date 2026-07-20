import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();

});


test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);

});

test('invalid login shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});

test('Empty username field shows required field error', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login('', 'secret_sauce');

      await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();

})



