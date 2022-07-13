import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import {Router} from "@angular/router";
import { EducationLevelService } from 'src/app/service/employee/education-level.service';
import {EducationLevel} from "../../../model/employee/education-level";
import { PositionService } from 'src/app/service/employee/position.service';
import { Position } from 'src/app/model/employee/position';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  educationLevels : EducationLevel[];
  positions : Position[];
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    identityCard: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    educationLevel: new FormControl(),
    position: new FormControl(),
    salary: new FormControl(),

  })

  constructor(private employeeService: EmployeeService,private educationLevelService: EducationLevelService,
              private positionService: PositionService,private  router: Router) {
  }

  ngOnInit(): void {
    this.educationLevelService.getAll().subscribe(educationLevels => this.educationLevels = educationLevels);
    this.positionService.getAll().subscribe(positions => this.positions = positions);

  }
  saveEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee).subscribe(() => {
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/employee/list')
  }
}
