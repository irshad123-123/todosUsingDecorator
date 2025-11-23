import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-list',
  templateUrl: './fair-list.component.html',
  styleUrls: ['./fair-list.component.scss']
})
export class FairListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() imgData !: Ifair

}
