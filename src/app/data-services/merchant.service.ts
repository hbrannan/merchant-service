import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Order } from '../components/order';

@Injectable()
export class MerchantService {

  constructor(private http:Http ) { }

  getOrderList(){
    return this.http.get('https://sample-order-service.herokuapp.com/orders-data/order')
      .map(res => res.json());
  }

  claimOrder(order: Order, name:string){
    console.log('in http claimOrder:', order, name);
    let orderUpdate= {order:order, name:name};

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      params: orderUpdate
    });

    return this.http.put('https://sample-order-service.herokuapp.com/orders-data/order-claimed', orderUpdate, options)
      .map(res => {console.log(res);
      return res.json()})
  }

  processOrder(order: Order) {
    console.log('in http processOrder:', order);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({
      headers: headers,
      params: order
    });

    return this.http.put('https://sample-order-service.herokuapp.com/orders-data/order-processed', order, options)
      .map(res => {
        console.log('processOrderResult: ', res);
        return res.json()
      })
  }
}
