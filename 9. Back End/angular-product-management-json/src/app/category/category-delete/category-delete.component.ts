import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.categoryService.findById(id).subscribe(c => {
        this.deleteForm = new FormGroup({
          id: new FormControl(c.id),
          name: new FormControl(c.name),
        });
      })
    })
  }

  ngOnInit(): void {
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.deleteForm.value.id).subscribe(() => {
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/category/list')
  }
}
