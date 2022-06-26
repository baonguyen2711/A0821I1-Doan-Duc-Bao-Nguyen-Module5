import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num = 1;
  number1 = 0;
  number2 = 0;
  choice = "";
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.number1 = 0;
    this.number2 = 0;
  }

  checkChoice(checkChoice:string) {
    this.choice = checkChoice;
  }

  getResult() {
    switch (this.choice) {
      case "+":
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break
      case  "/":
        this.result = this.number1 / this.number2;
        break;
    }
  }
}
