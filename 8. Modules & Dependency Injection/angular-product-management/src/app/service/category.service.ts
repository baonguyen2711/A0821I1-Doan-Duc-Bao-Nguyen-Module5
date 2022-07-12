import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories: Category[] = [{
  id: 1,
  name: 'IPhone'
}, {
  id: 2,
  name: 'Samsung',
}, {
  id: 3,
  name: 'LG',
}]
  getAll(){
    return this.categories;
  }

  // @ts-ignore
  saveCategory(category: Category) {
    if (category.id === undefined) {
      // @ts-ignore
      category.id = this.categories[this.categories.length - 1].id + 1;
      this.categories.push(category);
    } else {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id === category.id) {
          this.categories[i] = category;
        }
      }
    }
  }

  findById(id : number) {
    return this.categories.find(category => category.id === id);
  }
  deleteProduct(id: number) {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }

  constructor(private http: HttpClient) { }
}
