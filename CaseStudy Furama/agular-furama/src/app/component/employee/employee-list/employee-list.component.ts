import {Component, OnInit} from '@angular/core';
import {EducationLevel} from 'src/app/model/employee/education-level';
import {Employee} from 'src/app/model/employee/employee';
import {EducationLevelService} from 'src/app/service/employee/education-level.service';
import {EmployeeService} from 'src/app/service/employee/employee.service';
import {Position} from "../../../model/employee/position";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  educationLevels: EducationLevel[];
  p: number = 1;

  constructor(private employeeService: EmployeeService, private educationLevelService: EducationLevelService) {
  }

  ngOnInit(): void {
    this.getAll();
    // this.educationLevelService.getAll().subscribe(educationLevels => this.educationLevels = educationLevels);
  }

  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    })
  }
}
