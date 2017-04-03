import { Component } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { FormsModule } from '@angular/forms';
import { Order } from './order';

@Component({
  selector:'merchant-form',
  templateUrl: './merchant-form.component.html',
  styleUrls: ['./merchant-form.component.css'],
  providers:[MerchantService]
})

export class MerchantFormComponent {
  constructor(private merchantService:MerchantService){}
  orders: ['sample'];
  selectedOrder: Order;

  onSelect(order: Order) : void {
    console.log('selected something', order)
    this.selectedOrder = order;
  }

  getListOrders() : void {
    this.merchantService.getOrderList()
      .subscribe(
        data => {
          this.orders = data;
        },
        error => alert(error),
        () => console.log('Order fetching finished')
      );
  }

  processOrder(order:Order) : void {
    console.log('hit processOrder func');
    this.merchantService.processOrder(order)
      .subscribe(
        data => {
          console.log('processOrder data', data);
          this.orders = data;
        },
        error => alert(error),
        () => console.log('Order fetching finished')
      );
  }
}

