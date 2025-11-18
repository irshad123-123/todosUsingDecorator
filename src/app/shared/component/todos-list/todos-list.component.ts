import { Component, Input, OnInit } from '@angular/core';
import { ItodoArr } from '../../models/todos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Input() msg ! :Array<ItodoArr>
  constructor() { }

  ngOnInit(): void {
  }

}
