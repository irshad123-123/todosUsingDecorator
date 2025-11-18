import { Component, OnInit } from '@angular/core';
import { IlaptopArr } from '../../models/laptop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-laptop-dashboard',
  templateUrl: './laptop-dashboard.component.html',
  styleUrls: ['./laptop-dashboard.component.scss']
})
export class LaptopDashboardComponent implements OnInit {

  laptopArr : Array<IlaptopArr> =[
    {
      laptopName : 'Acer',
      laptopId : '123'
    },
    {
      laptopName : 'DELL',
      laptopId : '123'
    },
    {
      laptopName : 'Lenova',
      laptopId : '123'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(msg : IlaptopArr){
    this.laptopArr.unshift(msg)
  }
  
}
