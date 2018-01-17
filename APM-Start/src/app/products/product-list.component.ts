import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../services/products.service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = 'Product List';
    showImage: boolean;
    errorMessage: string;
    _listFilter: string;
    filteredProducts: IProduct[];
    products: IProduct[];

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = value ? this.performFilter(value) : this.products;
    }

    constructor(private service: ProductService ) {
    }

    onStarRated(message: string): void {
        this.pageTitle = 'Product list: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        console.log('showImage = ' + this.showImage);
    }

    ngOnInit(): void {
        console.log('[control] ProductListComponent has been created');
        const sub = this.service.getProductsRemote()
                .subscribe(
                    products => {
                        this.products = products;
                        this.filteredProducts = this.products;
                        this.listFilter = 'cart';
                    },
                    error => this.errorMessage = <any>error);
    }

    ngOnDestroy(): void {
        console.log('[control] ProductListComponent has been destroyed');
    }
}
