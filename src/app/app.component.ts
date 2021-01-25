import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beginner';
  nameData = '';
  constructor(private user: UsersService) {
    console.log(this.user.getData());
    //get the data name
    this.nameData = this.user.getData().name;
  }
  name = 'Krishna Praisley';
  show = 'green';
  color = 'saldin';
  default = true;
  siteUrl = window.location.href; //get site url
  currentVal = '';
  parentData = 'bruce';
  //using with functions
  updateColor() {
    this.default = !this.default;
  }
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
  dataForChild = {
    name: 'Krishna Naile',
    email: 'kwiw@gmail.com',
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
