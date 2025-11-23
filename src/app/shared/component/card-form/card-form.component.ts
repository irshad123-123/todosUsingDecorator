import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IcardArr } from '../../models/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnChanges {
  isEditMode : boolean = false
  @ViewChild('cardForm') formCard ! : NgForm
  @Output() newCardEmit : EventEmitter<IcardArr> = new EventEmitter()
  @Input() editObj ! : IcardArr
  @Output() updatedObj : EventEmitter<IcardArr> = new EventEmitter()
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
  onNewCard(){
   if(this.formCard.valid){
     let Obj ={
      ...this.formCard.value,
      cardId :this.Uuid() 
    }
    console.log(Obj);
    this.formCard.reset()
    
    this.newCardEmit.emit(Obj)
   }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if(changes['editObj'].currentValue){
      this.formCard.form.patchValue(changes['editObj'].currentValue)
      this.isEditMode=true
    }
  }

  onCancel(){
    this.formCard.reset()
    this.isEditMode=false;
    location.reload()
  }

  onUpdateCard(){
    if(this.formCard.valid){
      let Updated_Obj = {
      ...this.formCard.value,
      cardId : this.editObj.cardId
    }
    this.updatedObj.emit(Updated_Obj)
    this.isEditMode = false
    this.formCard.reset()
    }
  }

}
