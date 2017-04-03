import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order } from './components/order';

@Injectable()
export class MerchantService {

  constructor(private http:Http ) { }

  getOrderList(){
    return this.http.get('https://sample-order-service.herokuapp.com/orders-data/order')
      .map(res => res.json());
  }

  claimOrder(orderId: string){
    console.log('in http claimOrder:', orderId, JSON.parse(orderId));
    orderId= JSON.parse(orderId);

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      params: orderId
    });

    return this.http.post('https://sample-order-service.herokuapp.com/orders-data/order', orderId, options)
      .map(res => {console.log(res);
      return res.json()})
  }

  processOrder(order: Order) {
    console.log('in http claimOrder:', order);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      params: order
    });

    return this.http.post('https://sample-order-service.herokuapp.com/orders-data/order-processed', order, options)
      .map(res => {
        console.log('processOrderResult: ', res);
        return res.json()
      })

  }
}
