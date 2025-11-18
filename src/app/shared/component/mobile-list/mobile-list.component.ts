import { Component, Input, OnInit } from '@angular/core';
import { ImobileArr } from '../../models/mobile';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {
  @Input() mobileData ! : Array<ImobileArr>
  constructor() { }

  ngOnInit(): void {
  }

}
