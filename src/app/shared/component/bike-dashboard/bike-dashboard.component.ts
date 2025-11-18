import { Component, OnInit } from '@angular/core';
import { IbikeArr } from '../../models/bike';

@Component({
  selector: 'app-bike-dashboard',
  templateUrl: './bike-dashboard.component.html',
  styleUrls: ['./bike-dashboard.component.scss']
})
export class BikeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bikeArr : Array<IbikeArr> = [
    {
      bikeName : 'Yamaha',
      bikeId : '123'
    },
    {
      bikeName : 'Honda',
      bikeId : '124'
    },
    {
      bikeName : 'Suzuki',
      bikeId : '125'
    }
  ]

  onClick(msg : IbikeArr){
    this.bikeArr.unshift(msg)
  }

}
