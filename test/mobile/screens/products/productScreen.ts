import { BaseScreen } from "../base/baseScreen";

export class ProductScreen extends BaseScreen {

    private selectors = {

        // product text verify it
        searchIcon: '#btn-search',
        cartIcon: '#btn-cart',
        productNameText: '#/txt-product-name',
        productPrice: '#/txt-product-price',
        addToCartButton: '#txt-add-to-cart',
        featuresArrow: '#icon-down',
        backButton: '#btn-back',

    }

    public async getSearchIcon() {
        await this.click(this.selectors.searchIcon);
    }

    public async getCartIcon() {
        await this.click(this.selectors.cartIcon);
    }

    public async getProductNameText() {
        return this.getText(this.selectors.productNameText);
    }

    public async getProductPrice() {
        return this.getText(this.selectors.productPrice);
    }

    public async addToCart() {
        await this.click(this.selectors.addToCartButton);
    }

    

}