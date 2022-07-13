import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EducationLevel} from "../../../model/employee/education-level";
import {Position} from "../../../model/employee/position";
import {EmployeeService} from "../../../service/employee/employee.service";
import {EducationLevelService} from "../../../service/employee/education-level.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PositionService} from "../../../service/employee/position.service";
import {Employee} from "../../../model/employee/employee";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

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

  ngOnInit(): void {

  }

  compareEmployee(e1: Employee, e2: Employee): boolean {
    return e1.id === e2.id;
  }

  updateEmployee() {
    const employee = this.editForm.value;
    this.employeeService.updateEmployee(employee.id, employee).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
    this.router.navigateByUrl('/employee/list');
  }

}
