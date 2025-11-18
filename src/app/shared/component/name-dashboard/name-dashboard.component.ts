import { Component, OnInit } from '@angular/core';
import { Iname } from '../../models/name';

@Component({
  selector: 'app-name-dashboard',
  templateUrl: './name-dashboard.component.html',
  styleUrls: ['./name-dashboard.component.scss']
})
export class NameDashboardComponent implements OnInit {
nameArr : Array<Iname> = [
    {
      name : 'Sunny',
      nameId: '123'
    },
    {
      name : 'Balaji',
      nameId: '124'
    },
    {
      name : 'Aniket',
      nameId: '125'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(msg : Iname){
    this.nameArr.unshift(msg)
  }

}
