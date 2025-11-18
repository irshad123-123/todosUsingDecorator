import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItodoArr } from '../../models/todos';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  @Output() transfer : EventEmitter<ItodoArr> = new EventEmitter()
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
    let data : ItodoArr = {
    ...form.value,
    todoId : this.Uuid()
   }
   console.log(data);
   this.transfer.emit(data)
    form.reset()  
    this._matSnackBar.open('The laptop is added successfully !!!', 'close',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition : 'left'
    })  
  }

}
