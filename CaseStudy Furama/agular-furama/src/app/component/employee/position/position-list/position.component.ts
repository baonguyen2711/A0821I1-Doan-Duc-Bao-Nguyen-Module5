import { Component, OnInit } from '@angular/core';
import {Position} from "../../../../model/employee/position";
import {PositionService} from "../../../../service/employee/position.service";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  positions: Position[]=[];
  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
  }
  getAll() {
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
    })
  }
}
