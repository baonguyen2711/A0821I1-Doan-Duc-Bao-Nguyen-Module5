import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {environment} from "../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todo');
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL + '/todo', todo);
  }

  edit(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/todo/${todo.id}`, todo.id);
  }

  delete(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  }
}
