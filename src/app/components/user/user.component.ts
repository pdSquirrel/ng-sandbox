import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  numberArray: number[];
  myTuplet: [string, boolean, number];

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st.',
      city: 'Boston',
      state: 'MA'
    };
    this.numberArray = [1, 2, 3];
    this.myTuplet = ['Roger', true, 23];
    console.log(this.addNumbers(1, 2));
  }
  showAge() {
    return this.age;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
