import { Component, OnInit } from '@angular/core';
import { BastketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinetn';

  constructor(private basketService:BastketService) {}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if(basketId) this.basketService.getBasket(basketId);
  }
}
