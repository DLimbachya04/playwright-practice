import { Page, Locator } from '@playwright/test';

export class InventoryPage {
     readonly page: Page;

     constructor(page: Page) {
        this.page = page;
    }

     async goto() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addItemToCart(productName: string){
        const button = this.page.locator(`#add-to-cart-${productName}`)
        await button.click ();

    }
}