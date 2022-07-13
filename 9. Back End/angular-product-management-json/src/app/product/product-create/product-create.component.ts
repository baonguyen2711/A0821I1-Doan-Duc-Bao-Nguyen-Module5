import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/service/product.service';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  })

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }

    saveProduct() {
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
      this.router.navigateByUrl('/product/list')
    }
}
