import {Component, OnInit} from '@angular/core';
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

  editForm: FormGroup;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.categoryService.findById(id).subscribe(c => {
        this.editForm = new FormGroup({
          id: new FormControl(c.id),
          name: new FormControl(c.name),
        });
      })
    })
  }

  ngOnInit(): void {
  }

  editCategory() {
    const category = this.editForm.value;
    this.categoryService.updateCategory(this.editForm.value.id, category).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/category/list');
  }

}
