import { Component, Input, OnInit } from '@angular/core';
import { IlaptopArr } from '../../models/laptop';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {
  constructor() { }
  @Input() laptopList ! : Array<IlaptopArr>
  ngOnInit(): void {
  }

}
