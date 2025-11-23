import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo1Arr } from '../../models/todo1';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo1-list',
  templateUrl: './todo1-list.component.html',
  styleUrls: ['./todo1-list.component.scss']
})
export class Todo1ListComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  @Input() todoFromDash : Array<Itodo1Arr> = []  
  @Output() todoRemove  :EventEmitter<string> = new EventEmitter()
  @Output() todoEdit  :EventEmitter<Itodo1Arr> = new EventEmitter()
  onRemove(id : string){
    this.todoRemove.emit(id)
  }
  onEdit(todo : Itodo1Arr){
    this.todoEdit.emit(todo)
  }
}
