import {Component, OnInit} from '@angular/core';
import {EducationLevel} from "../../../model/employee/education-level";
import {Position} from "../../../model/employee/position";
import {EmployeeService} from "../../../service/employee/employee.service";
import {EducationLevelService} from "../../../service/employee/education-level.service";
import {PositionService} from "../../../service/employee/position.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Employee} from 'src/app/model/employee/employee';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  editForm: FormGroup;
  educationLevels: EducationLevel[];
  positions: Position[];

  constructor(private employeeService: EmployeeService, private educationLevelService: EducationLevelService,
              private positionService: PositionService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.employeeService.findById(id).subscribe(employee => {
        this.editForm = new FormGroup({
          id: new FormControl(employee.id),
          name: new FormControl(employee.name),
          dateOfBirth: new FormControl(employee.dateOfBirth),
          identityCard: new FormControl(employee.identityCard),
          email: new FormControl(employee.email),
          phone: new FormControl(employee.phone),
          educationLevel: new FormControl(employee.educationLevel),
          position: new FormControl(employee.position),
          salary: new FormControl(employee.salary),
        });
        this.educationLevelService.getAll().subscribe(educationLevels => this.educationLevels = educationLevels);
        this.positionService.getAll().subscribe(positions => this.positions = positions);
      })
    })
  }
  compareEmployee(e1: Employee, e2: Employee): boolean {
    return e1.id === e2.id;
  }
  ngOnInit(): void {
  }

}
