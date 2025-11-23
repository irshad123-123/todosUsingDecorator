import { Component, OnInit } from '@angular/core';
import { IshopArr } from '../../models/shop';

@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.scss']
})
export class ShopDashboardComponent implements OnInit {

  shopArr : Array<IshopArr> = [
    {
      shopName : 'A-one Glass',
      mobileNo : 8766737322,
      work : 'Glass & Doors',
      emial : 'aoneglass@gmail.com',
      shopTiming : '10AM - 8PM',
      shopId : '124'
    },
    {
      shopName : 'A-one Steel',
      mobileNo : 8766737322,
      work : 'Stell & Grills',
      emial : 'aonesteel@gmail.com',
      shopTiming : '10AM - 8PM',
      shopId : '125'
    },
    {
      shopName : 'A-one Electrical',
      mobileNo : 8766737322,
      work : 'Electricals',
      emial : 'aoneelectrical@gmail.com',
      shopTiming : '10AM - 8PM',
      shopId : '126'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
