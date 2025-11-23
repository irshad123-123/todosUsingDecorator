import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItodoArr } from '../../models/todos';
import { Itodo1Arr } from '../../models/todo1';
import { IstdArr } from '../../models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo1-dashboard',
  templateUrl: './todo1-dashboard.component.html',
  styleUrls: ['./todo1-dashboard.component.scss']
})
export class Todo1DashboardComponent implements OnInit {

  constructor(private _matSnackBar : MatSnackBar) { }

  ngOnInit(): void {
  }
  todo1Arr : Array<Itodo1Arr> = [
    {
      todoName : 'HTML',
      todoId : '123'
    }
  ]

   snackBar(msg: string){
    this._matSnackBar.open(msg, 'close',{
      duration : 3000,
      verticalPosition : 'bottom',
      horizontalPosition : 'center'
    })
  }

  onNewTodo(newTodo : Itodo1Arr){
    this.todo1Arr = [...this.todo1Arr, newTodo]
  }

  onRemoveTodo(id: string){
    let isConfirm = confirm('Are you sure want to remove this todoItem !!!')
    if(isConfirm){
      let getIndex = this.todo1Arr.findIndex(t=> t.todoId === id)
    this.todo1Arr.splice(getIndex,1)
      this.snackBar('The new todoItem added successfully !!!')
    }
  }

  
  editTodo ! : Itodo1Arr
  onEditTodo(todo : Itodo1Arr){
    this.editTodo = todo
  }
  onUpdatedObj(UObj : Itodo1Arr){
    let getIndex = this.todo1Arr.findIndex(id =>id.todoId === UObj.todoId)
    this.todo1Arr[getIndex] = UObj
  }

}
