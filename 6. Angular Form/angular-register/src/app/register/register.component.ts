import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    pwGroup: new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5), Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$') //Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số:
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.minLength(5), Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$') //Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số:
      ]))
    }, this.comparePassword),

    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    }),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required, Validators.pattern((/^((\+84)|0)\d{9,10}$/))
    ])
  })

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ?
      null : {
        passwordNotMatch: true
      };
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    // @ts-ignore
    return this.registerForm.get('pwGroup').get('password');
  }

  get confirmPassword() {
    // @ts-ignore
    return this.registerForm.get('pwGroup').get('confirmPassword');
  }

  get city() {
    // @ts-ignore
    return this.registerForm.get('address').get('city');
  }

  get country() {
    // @ts-ignore
    return this.registerForm.get('address').get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }
  onSubmit() {
    console.log(this.registerForm.value)
  }
}
