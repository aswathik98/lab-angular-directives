import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  color:boolean = false;
  show: boolean = false;
  mobiles = ['IPhone', 'Galaxy 9.0', 'Blackberry 10Z'];
  students: any[] = [
    {
      "slNo":1,
      "name": "Charle",
      "course": "BSc",
      "grade": 'A'
    },
    {
      "slNo":2,
      "name": "LesLie",
      "course": "BTech",
      "grade": 'B'
    },
    {
      "slNo":3,
      "name": "John",
      "course": "MSc",
      "grade": 'C'
    },
    {
      "slNo":4,
      "name": "Jack",
      "course": "MSc",
      "grade": 'D'
    },
    {
      "slNo":5,
      "name": "shawn",
      "course": "Bsc",
      "grade": 'C'
    },
  ];
  title = 'AngularDirectives';
  changeColor(){
    this.color=true;
  }
}
