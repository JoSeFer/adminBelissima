import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth//auth.service';
import { observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';
import { CartService } from '@common/cart.service';
import { ProductsService } from '@common/products.service';
import { Product } from '../../models/product';
import { AppService } from '@common/app.service';
import { SnackService } from '@common/snack.service';
import { map } from '../../../../node_modules/rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

public products: any;
  constructor(
    private productService: ProductsService,
    public auth: AuthService,
    public cartService: CartService,
    public appService: AppService,
    public snackService: SnackService
  ) { }

  ngOnInit() {
    this.products = this.productService.products().snapshotChanges().map(productSnaps => {
      return productSnaps.map(product => {
        const productData = product.payload.doc.data();
        const productId = product.payload.doc.id;
        return this.productService.getProductImages(productId).snapshotChanges().map(uploadSnap => {
          let number = 0;
          return uploadSnap.map(upload => {

            if (number === 0) {
              number++;
              return upload.payload.doc.data();
            }
          });
        })
        .map(uploads => {
          return {productId, ...productData, uploads: uploads};
        });
      });
    })
    .flatMap(products => Observable.combineLatest(products));
  }

}