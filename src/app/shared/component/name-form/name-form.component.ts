import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iname } from '../../models/name';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent implements OnInit {


   Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };
  constructor(private _matSnackBar : MatSnackBar) { }
 @Output() transfer : EventEmitter<Iname> = new EventEmitter()
  ngOnInit(): void {
  }
  onClick(form : NgForm){
    let data : Iname = {
      ...form.value,
      nameId : this.Uuid()
    }
    // console.log(data);
    form.reset()
    this.transfer.emit(data)
    this._matSnackBar.open('The name is added successfully !!!', 'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
    })
  }


}
