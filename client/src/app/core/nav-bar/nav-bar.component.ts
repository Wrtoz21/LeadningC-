import { Component } from '@angular/core';
import { BastketService } from 'src/app/basket/basket.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public basketService:BastketService){  }

  getCount(items:BasketItem[]) {
    return items.reduce((sum,item) => sum + item.quantity, 0);
  }
}
