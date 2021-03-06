import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm: FormGroup = new FormGroup({
  name : new FormControl(),
  price : new FormControl(),
  description : new FormControl(),
})
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
  const product = this.productForm.value;
  this.productService.saveProduct(product);
  this.router.navigateByUrl('/product/list')
    console.log(product)
  }

}
