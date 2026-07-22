import { test, expect } from '@playwright/test';
import { InventoryPage } from './pages/InventoryPage';
import { LoginPage } from './pages/LoginPage';

let inventoryPage: InventoryPage;
let loginPage: LoginPage;


test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

});

test ('add item to cart', async({ page }) => {
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    
    const count = await inventoryPage.getCartCount();
    await expect(count).toBe('1');
})

test ('remove item from cart', async({ page }) => {
  await inventoryPage.addItemToCart('sauce-labs-backpack');
  await inventoryPage.removeItemFromCart('sauce-labs-backpack')
  
  await expect(inventoryPage.cartBadge).not.toBeVisible();

})