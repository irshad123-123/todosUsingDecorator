import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImobileArr } from '../../models/mobile';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.scss']
})
export class MobileFormComponent implements OnInit {
  @Output() mobileD : EventEmitter<ImobileArr> = new EventEmitter()
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
      mobileId : this.Uuid()
    }
    form.reset()
    this.mobileD.emit(val)
    this._matSnackBar.open('The mobile is added successfully !!!', 'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
    })
  }

}
