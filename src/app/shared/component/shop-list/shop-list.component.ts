import { Component, Input, OnInit } from '@angular/core';
import { IstdArr } from '../../models/student';
import { IshopArr } from '../../models/shop';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  constructor() { }
  @Input() shopData ! : Array<IshopArr>
  ngOnInit(): void {
  }

}
