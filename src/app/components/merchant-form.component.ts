import { Component } from '@angular/core';
import { MerchantService } from '../data-services/merchant.service';
import { FormsModule } from '@angular/forms';
import { Order } from './order';
import { Merchant } from './merchant';

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
  orderProcessedResponse: string;
  orderClaimedResponse: string;

  model = new Merchant('');

  onSelect(order: Order) : void {
    /*
    TODOS:
      -- ClaimOrder && ProcessOrder -> refactor into sep. components that show only after order selected.
      -- Add/change options: See Available Orders, See My Claimed Orders, See My Processed Orders
    */
    this.selectedOrder = order;
  }

  getListOrders() : void {
    //TODO: allOrders / availableOrders / myClaimedOrders / myProcessedOrders
    this.merchantService.getOrderList()
      .subscribe(
        data => {
          this.orders = data;
        },
        error => alert(error),
        () => console.log('Order fetching finished')
      );
  }

  claimOrder(order:Order) : void {
    console.log('hit claimOrder func', order, this.model.merchantName);
    if (order === undefined) {
      this.orderClaimedResponse = 'You must first select an order to claim.'
      return;
    } else {
      this.merchantService.claimOrder(order, this.model.merchantName)
        .subscribe(
          data => {
            console.log('claimedOrder data', data);
            this.orderClaimedResponse = `Thanks for the claiming an order! Your order has been claimed.`;
          },
          error => alert(error),
          () => console.log('ClaimedOrder fetching finished')
        );
    }
  }

  processOrder(order:Order) : void {
    //TODO: failsafe: only allow merchants with the correct name to claim the order
    console.log('hit processOrder func');
    if (!order) {
      this.orderClaimedResponse = 'You must first select an order to process.'
      return;
    } else {
      this.merchantService.processOrder(order)
        .subscribe(
          data => {
            console.log('processOrder data', data);
            this.orderProcessedResponse = 'Thanks for the update! Your order has been processed.';
          },
          error => alert(error),
          () => console.log('ProcessOrder fetching finished')
        );
    }
  }

  get diagnostic() { return JSON.stringify(this.model);}
}

