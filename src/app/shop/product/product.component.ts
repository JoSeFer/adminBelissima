import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // para pasar los parametros por Url
import { ProductsService } from '@common/products.service';
import { Upload } from '../../models/upload';
import { AuthService } from '@auth/auth.service';
import { CartService } from '@common/cart.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any;
  slides = [];
  slideConfig = { 'slidesToShow': 2, 'slidesToScroll': 2 };
  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    public auth: AuthService,
    public cartService: CartService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    const product = this.productService.product(id);
    product.collection('uploads').valueChanges().subscribe(uploadSnap => {
      uploadSnap.map((upload: Upload) => {
         this.slides.push({img: upload.url});
      });
    });
     this.product = product.valueChanges();
  }

  ngOnInit() {
  }




  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
  }

  beforeChange(e) {
    //  console.log('beforeChange');
  }

}
