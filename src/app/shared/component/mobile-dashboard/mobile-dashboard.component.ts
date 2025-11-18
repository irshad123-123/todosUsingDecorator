import { Component, OnInit } from '@angular/core';
import { ImobileArr } from '../../models/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mobileArr : Array<ImobileArr>= [
    {
      mobileName : 'Samsung',
      mobileId : '123'
    },
    {
      mobileName : 'Iphone',
      mobileId : '124'
    },
    {
      mobileName : 'Oppo',
      mobileId : '125'
    }
  ]
onClick(msg : ImobileArr){
  this.mobileArr.unshift(msg)
}

}
