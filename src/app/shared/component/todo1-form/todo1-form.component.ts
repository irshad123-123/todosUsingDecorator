import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Itodo1Arr } from '../../models/todo1';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo1-form',
  templateUrl: './todo1-form.component.html',
  styleUrls: ['./todo1-form.component.scss']
})
export class Todo1FormComponent implements OnInit, OnChanges {
  isEditMode: boolean = false
  constructor(private _matSnackBar : MatSnackBar) { }

  snackBar(msg: string){
    this._matSnackBar.open(msg, 'close',{
      duration : 3000,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    })
  }

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

  @ViewChild('todoSubmit') formRef !: NgForm
  @Output() newAddedTodo: EventEmitter<Itodo1Arr> = new EventEmitter()
  @Input() editTodo !: Itodo1Arr
  @Output() UpdateTodoEmit: EventEmitter<Itodo1Arr> = new EventEmitter()
  onNewAdd() {
    if (this.formRef.valid) {
      let newObj = {
        ...this.formRef.value,
        todoId: this.Uuid()
      }
      console.log(newObj)
      this.formRef.reset()
      this.newAddedTodo.emit(newObj)
      this.snackBar('The new todoItem added successfully !!!')
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editTodo'].currentValue) {
      this.formRef.form.patchValue(changes['editTodo'].currentValue)
      this.isEditMode = true
    }
  }
  onUpdateTodo() {
    if (this.formRef.valid) {
      let Updated_obj = {
        ...this.formRef.value,
        todoId: this.editTodo.todoId
      }
      this.UpdateTodoEmit.emit(Updated_obj)
      this.formRef.reset()
      this.snackBar('The todoItem updated successfully !!!')
    }
  }

}
