import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IlaptopArr } from '../../models/laptop';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.scss']
})
export class LaptopFormComponent implements OnInit {
  @Output() transfer : EventEmitter<IlaptopArr> = new EventEmitter()
  constructor(private _matSnackBar : MatSnackBar) { }

  Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };
  ngOnInit(): void {
  }
  onClick(form : NgForm){
    let val = {
      ...form.value,
      laptopId : this.Uuid()
    }
    form.reset()
    this.transfer.emit(val)
    this._matSnackBar.open('The laptop is added successfully !!!', 'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
    })
  }
}
