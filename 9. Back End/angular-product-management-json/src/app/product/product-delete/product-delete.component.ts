import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  deleteForm: FormGroup;
  categories: Category[];
  constructor(private  productService: ProductService,private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.productService.findById(id).subscribe(product => {
        this.deleteForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price : new FormControl(product.price),
          description : new FormControl(product.description),
          category : new FormControl(product.category?.name),
        });
        this.categoryService.getAll().subscribe(categories => this.categories = categories);
      })
    })
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.deleteProduct(this.deleteForm.value.id).subscribe(() => {
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/product/list')
  }
}
