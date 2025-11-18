import { Component, OnInit } from '@angular/core';
import { ItodoArr } from '../../models/todos';

@Component({
  selector: 'app-todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.scss']
})
export class TodosDashboardComponent implements OnInit {

  todoArr : Array<ItodoArr> = [
    {
      todoItem : 'HTML',
      todoId : '123'
    },
    {
      todoItem : 'CSS',
      todoId : '124'
    },
    {
      todoItem : 'Javascript',
      todoId : '125'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(msg : ItodoArr){
    this.todoArr.unshift(msg)
  }
}
