import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Iname } from '../../models/name';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent implements OnInit {
  @Input() nameFromDash !: Array<Iname> 
  constructor() { }

  ngOnInit(): void {
  }

}
