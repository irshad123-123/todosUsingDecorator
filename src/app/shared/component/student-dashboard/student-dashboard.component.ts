import { Component, OnInit } from '@angular/core';
import { IstdArr } from '../../models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stdArr : Array<IstdArr> = [
    {
      fname : 'Jhon',
      lname : 'Doe',
      email : 'jhon@gmail.com',
      contact : 1234567890,
      status : 'active',
      stdId : '123'
    },
    {
      fname : 'May',
      lname : 'Doe',
      email : 'may@gmail.com',
      contact : 1234567890,
      status : 'in-active',
      stdId : '124'
    },
    {
      fname : 'June',
      lname : 'Doe',
      email : 'june@gmail.com',
      contact : 1234567890,
      status : 'active',
      stdId : '125'
    },
    {
      fname : 'Albert',
      lname : 'Einstein',
      email : 'albert@gmail.com',
      contact : 1234567890,
      status : 'in-active',
      stdId : '126'
    }
  ]
  onClick(msg : IstdArr){
    this.stdArr.push(msg)
  }
}
