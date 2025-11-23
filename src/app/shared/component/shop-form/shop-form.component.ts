import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnInit {
  @ViewChild('addShop') addShopRef ! : NgForm
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
  onSubmitShop(){
    if(this.addShopRef.valid){
      let obj = {
      ...this.addShopRef.value,
      shopId : this.Uuid()
    }
    console.log(obj);
    }
    
  }

}
