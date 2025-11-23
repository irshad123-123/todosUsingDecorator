import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../models/fair';

@Component({
  selector: 'app-fair-form',
  templateUrl: './fair-form.component.html',
  styleUrls: ['./fair-form.component.scss']
})
export class FairFormComponent implements OnInit {
  @Input() newData ! : Array<Ifair>
  @Output() clickEmit : EventEmitter<Ifair> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(d:Ifair){
    console.log(d)
    this.clickEmit.emit(d)
  }

}
