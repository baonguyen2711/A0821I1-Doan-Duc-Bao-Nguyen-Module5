import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/model/product';
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from 'src/app/model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  categories: Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getAll();
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

}
