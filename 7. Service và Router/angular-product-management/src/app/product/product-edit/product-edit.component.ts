import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from 'src/app/model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup ;
  product: Product | any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id  = paramMap.get('id');
      this.product = this.productService.findById(Number(id));
    })
    this.editForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  ngOnInit(): void {
  }
  save() {
    this.productService.saveProduct(this.editForm.value);
    this.router.navigateByUrl('/product/list');
  }
}
