import { Page, Locator } from '@playwright/test';

export class InventoryPage {
     readonly page: Page;
     readonly cartBadge: Locator;

     constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }


    async addItemToCart(productName: string){
        const button = this.page.locator(`#add-to-cart-${productName}`)
        await button.click ();

    }
    async getCartCount(){
        return await this.cartBadge.textContent();
        }

    async removeItemFromCart(productName: string){
        const button = this.page.locator(`#remove-${productName}`)
        await button.click();
    }
}