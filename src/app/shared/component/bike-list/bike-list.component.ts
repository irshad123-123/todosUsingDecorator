import { Component, Input, OnInit } from '@angular/core';
import { IbikeArr } from '../../models/bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  @Input() bike ! : Array<IbikeArr>
  constructor() { }

  ngOnInit(): void {
  }

}
