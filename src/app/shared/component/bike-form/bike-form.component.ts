import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IbikeArr } from '../../models/bike';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.scss']
})
export class BikeFormComponent implements OnInit {
  @Output() transferBike : EventEmitter<IbikeArr> = new EventEmitter()
  constructor(private _matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };

  onClick(form : NgForm){
    let val = {
      ...form.value,
      bikeId : this.Uuid()
    }
    this.transferBike.emit(val)
    form.reset()
    this._matSnackBar.open('The bike is added successfully !!!', 'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
    })
  }
}
