import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { Employee } from '../../model/employee/employee';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(API_URL + '/employees');
  }


  findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${API_URL}/employees/${id}`);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${API_URL}/employees/${id}`);
  }

  constructor(private http: HttpClient) { }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(API_URL + '/employees', employee);
  }

  updateEmployee(id: number,employee :Employee) {
    return this.http.put<Employee>(`${API_URL}/employees/${id}`, employee);
  }
}
