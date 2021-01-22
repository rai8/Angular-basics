import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'beginner';
  name = 'Krishna Praisley';
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
}
