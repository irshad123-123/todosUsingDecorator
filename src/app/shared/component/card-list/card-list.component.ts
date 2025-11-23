import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IcardArr } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() editCard : EventEmitter<IcardArr> = new EventEmitter()
  @Input() fromCardArr ! : IcardArr
  @Output() removeCard : EventEmitter<string> = new EventEmitter()
  onRemoveCard(card : string){
    this.removeCard.emit(card)
  }

  onEditCard(card : IcardArr){
    this.editCard.emit(card)
  }

}
