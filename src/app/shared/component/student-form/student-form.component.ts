import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IstdArr } from '../../models/student';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Output() stdEmit : EventEmitter<IstdArr> = new EventEmitter()
  constructor() { }

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
  onClick(form : NgForm){
    let val :IstdArr = {
      ...form.value,
      stdId : this.Uuid()
    }
    this.stdEmit.emit(val)
  }

}
