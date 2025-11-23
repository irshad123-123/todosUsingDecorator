import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IcardArr } from '../../models/card';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardArr: Array<IcardArr> = [
    {
      titleName: 'HTML',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda ipsam officia eligendi minus quos? Natus odio molestiae distinctio iste ex, ut ullam aperiam necessitatibus consectetur facilis repellat deserunt fugit?',
      cardId: '123',
      about: 'Theory'
    },
    {
      titleName: 'CSS',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda ipsam officia eligendi minus quos? Natus odio molestiae distinctio iste ex, ut ullam aperiam necessitatibus consectetur facilis repellat deserunt fugit?',
      cardId: '124',
      about: 'Coding'
    },
    {
      titleName: 'Javascript',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda ipsam officia eligendi minus quos? Natus odio molestiae distinctio iste ex, ut ullam aperiam necessitatibus consectetur facilis repellat deserunt fugit?',
      cardId: '125',
      about: 'Theory'
    },
    {
      titleName: 'Typescript',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda ipsam officia eligendi minus quos? Natus odio molestiae distinctio iste ex, ut ullam aperiam necessitatibus consectetur facilis repellat deserunt fugit?',
      cardId: '126',
      about: 'Coding'
    },
    {
      titleName: 'Angular',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda ipsam officia eligendi minus quos? Natus odio molestiae distinctio iste ex, ut ullam aperiam necessitatibus consectetur facilis repellat deserunt fugit?',
      cardId: '127',
      about: 'Theory'
    }
  ]

  editObj ! : IcardArr

  onNewCard(card: IcardArr) {
    this.cardArr = [card, ...this.cardArr]
  }

  onRemoveCard(id: string) {
    let isConfirm = confirm('Are you sure, want to remove this card !!!')
    if (isConfirm) {
      this.cardArr = this.cardArr.filter(f => f.cardId !== id)
    }
  }
  onEditCard(edit : IcardArr){
    this.editObj = edit
  }

  onUpdatedCard(update: IcardArr){
    let getIndex = this.cardArr.findIndex(id => id.cardId === update.cardId)
    this.cardArr[getIndex] = update
  }
  
}
