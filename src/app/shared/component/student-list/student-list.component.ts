import { Component, Input, OnInit } from '@angular/core';
import { IstdArr } from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() stdData ! : Array<IstdArr>
  constructor() { }

  ngOnInit(): void {
  }

}
