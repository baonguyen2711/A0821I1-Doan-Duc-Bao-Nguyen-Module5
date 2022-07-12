import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from 'src/app/model/product';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.productService.findById(id).subscribe(product => {
        this.editForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price : new FormControl(product.price),
          description : new FormControl(product.description),
          category : new FormControl(product.category.name),
        });
        this.categoryService.getAll().subscribe(categories => this.categories = categories);
      })
    })
  }

  ngOnInit(): void {

  }

  updateProduct() {
    const product = this.editForm.value;
    this.productService.updateProduct(this.editForm.value.id, product).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/product/list');
  }
}
