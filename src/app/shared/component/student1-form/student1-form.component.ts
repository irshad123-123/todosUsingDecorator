import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IstdArr } from '../../models/student';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student1-form',
  templateUrl: './student1-form.component.html',
  styleUrls: ['./student1-form.component.scss']
})
export class Student1FormComponent implements OnInit, OnChanges {
  isEditMode :boolean = false
  @ViewChild('stdForm') stdForm ! : NgForm 
  @Output() onNewStd : EventEmitter<IstdArr> = new EventEmitter()
  @Input() editStdObj!  : IstdArr
  @Output() onUpdateObj : EventEmitter<IstdArr> = new EventEmitter()
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
  onSubmitStd(){
    let val = {
      ...this.stdForm.value,
      stdId :this.Uuid()
    }
    console.log(val);
    this.onNewStd.emit(val)
    this.stdForm.reset()
    this._matSnackBar.open('The new student added successfully !!!','close',{
      duration : 3000,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['editStdObj'].currentValue){
      this.stdForm.form.patchValue(changes['editStdObj'].currentValue)
      this.isEditMode = true
    }
  } 

  onUpdateStd(){
    if(this.stdForm.valid){
      let Updated_obj={...this.stdForm.value, stdId : this.editStdObj.stdId}
      this.onUpdateObj.emit(Updated_obj)
      this.isEditMode = false;
      this.stdForm.reset()
      this._matSnackBar.open('The student details updated successfully !!!','close',{
      duration : 3000,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    })
    }
  }

  onCancel(){
    this.stdForm.reset()
    this.isEditMode = false;
    window.location.reload()
  }
}

