import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IstdArr } from '../../models/student1';

@Component({
  selector: 'app-student1-list',
  templateUrl: './student1-list.component.html',
  styleUrls: ['./student1-list.component.scss']
})
export class Student1ListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() stdArr ! : Array<IstdArr>
  @Output() stdEdit : EventEmitter<IstdArr> = new EventEmitter()
  @Output() stdRemove : EventEmitter<string> = new EventEmitter()
  onEditStd(std : IstdArr){
    console.log(std)
    this.stdEdit.emit(std)
  }

  onRemoveStd(stdId : string){
    this.stdRemove.emit(stdId)
  }

}
