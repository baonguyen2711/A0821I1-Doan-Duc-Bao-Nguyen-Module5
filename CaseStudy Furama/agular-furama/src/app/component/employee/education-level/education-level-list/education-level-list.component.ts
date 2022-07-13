import {Component, OnInit} from '@angular/core';
import {EducationLevel} from 'src/app/model/employee/education-level';
import {EducationLevelService} from 'src/app/service/employee/education-level.service';

@Component({
  selector: 'app-education-level-list',
  templateUrl: './education-level-list.component.html',
  styleUrls: ['./education-level-list.component.css']
})
export class EducationLevelListComponent implements OnInit {
  educationLevels: EducationLevel[] = [];

  constructor(private educationLevelService: EducationLevelService) {
  }

  ngOnInit(): void {
  }

  getAll() {
    this.educationLevelService.getAll().subscribe(educationLevels => {
      this.educationLevels = educationLevels;
    })
  }
}
