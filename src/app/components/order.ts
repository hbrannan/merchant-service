export class Order {
  constructor (
    public _id: string,
    public quantity: number,
    public shippingOption: string,
    public name: string,
    public address: string,
    public company?: string
  ){}
}


