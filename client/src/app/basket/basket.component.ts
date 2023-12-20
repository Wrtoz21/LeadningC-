import { Component } from '@angular/core';
import { BastketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(public basketService: BastketService) {

  }
  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id:number,quantity:number){
    this.basketService.removeItemFromBasket(id,quantity);
  }

}
