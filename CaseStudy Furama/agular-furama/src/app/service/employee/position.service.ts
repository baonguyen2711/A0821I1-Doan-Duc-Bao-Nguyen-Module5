import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {EducationLevel} from "../../model/employee/education-level";
import {HttpClient} from "@angular/common/http";
import { Position } from 'src/app/model/employee/position';


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(API_URL + '/positions');
  }
  constructor(private http: HttpClient) { }
}
