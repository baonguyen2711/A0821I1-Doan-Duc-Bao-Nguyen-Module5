import { Component, OnInit } from '@angular/core';
import {EducationLevel} from "../../../model/employee/education-level";
import {Position} from "../../../model/employee/position";
import {EmployeeService} from "../../../service/employee/employee.service";
import {EducationLevelService} from "../../../service/employee/education-level.service";
import {PositionService} from "../../../service/employee/position.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
deleteForm : FormGroup;
  educationLevels: EducationLevel[];
  positions: Position[];

  constructor(private employeeService: EmployeeService, private educationLevelService: EducationLevelService,
              private positionService: PositionService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.employeeService.findById(id).subscribe(employee => {
        this.deleteForm = new FormGroup({
          id: new FormControl(employee.id),
          name: new FormControl(employee.name),
          dateOfBirth: new FormControl(employee.dateOfBirth),
          identityCard: new FormControl(employee.identityCard),
          email: new FormControl(employee.email),
          phone: new FormControl(employee.phone),
          educationLevel: new FormControl(employee.educationLevel?.name),
          position: new FormControl(employee.position?.name),
          salary: new FormControl(employee.salary),
        });
        this.educationLevelService.getAll().subscribe(educationLevels => this.educationLevels = educationLevels);
        this.positionService.getAll().subscribe(positions => this.positions = positions);
      })
    })
  }

  ngOnInit(): void {
  }

  deleteEmployee() {
    const employee = this.deleteForm.value
    this.employeeService.deleteEmployee(employee.id).subscribe(() => {
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/employee/list')
  }

}
