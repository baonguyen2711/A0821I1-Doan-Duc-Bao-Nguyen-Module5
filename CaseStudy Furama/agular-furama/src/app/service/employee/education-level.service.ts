import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { EducationLevel } from 'src/app/model/employee/education-level';
import {HttpClient} from "@angular/common/http";


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {
  getAll(): Observable<EducationLevel[]> {
    return this.http.get<EducationLevel[]>(API_URL + '/educationLevels');
  }
  constructor(private http: HttpClient) { }
}
