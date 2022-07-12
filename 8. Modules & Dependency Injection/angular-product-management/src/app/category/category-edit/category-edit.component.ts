import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  editForm: FormGroup ;
  category: Category | any;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id  = paramMap.get('id');
      this.category = this.categoryService.findById(Number(id));
    })
    this.editForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name),
    });
  }

  ngOnInit(): void {
  }
  editCategory() {
    this.categoryService.saveCategory(this.editForm.value);
    this.router.navigateByUrl('/category/list');
  }

}
