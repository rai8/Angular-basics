import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-compo',
  templateUrl: './user-compo.component.html',
  styleUrls: ['./user-compo.component.css'],
})
export class UserCompoComponent implements OnInit {
  @Input() hero;
  constructor() {}

  ngOnInit(): void {
    console.log(this.hero);
  }
}
