import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beginner';
  name = 'Krishna Praisley';
  show = 'green';
  color = 'saldin';
  siteUrl = window.location.href; //get site url
  currentVal = '';
  //using with functions

  getValue(val) {
    console.log(val);
    this.currentVal = val;
  }

  getName() {
    return 'Shinskey ' + this.name;
  }
  getAlert(name) {
    alert(name);
  }

  //using with objects
  obj = {
    name: 'Kelly',
    age: 20,
  };

  //using with arrays
  arr = ['Peter', 'Kelly', 'Simon'];
  data = ['anil', 'bruce', 'krayla', 'sekna'];
  dataComplex = [
    { name: 'Ryton', age: 22 },
    { name: 'Pasley', age: 18 },
    { name: 'Krishna', age: 17 },
    { name: 'Salhadh', age: 25 },
  ];
}
