import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Category } from 'src/app/model/category';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
deleteForm : FormGroup;
category : Category | any;
  constructor(private categoryService: CategoryService,private  activatedRoute: ActivatedRoute,private  router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id  = paramMap.get('id');
      this.category = this.categoryService.findById(Number(id));
    })
    this.deleteForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name),
    });
  }

  ngOnInit(): void {
  }
  deleteCategory() {
    this.categoryService.deleteProduct(this.category.id)
    this.router.navigateByUrl('/category/list')
  }
}
