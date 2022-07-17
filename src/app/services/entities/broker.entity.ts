import { Purchase } from "./purchase.entity";
import { Sell } from "./sell.entity";

export class Broker {

  private _sellList: Array<Sell>;
  private _purchaseList: Array<Purchase>;
  private _meanPrice: Number = 0.0;
  private _sharesQuantity: Number;
  private _totalAmount: Number;

  constructor() {
    this._meanPrice = 0.0;
    this._sharesQuantity = 0;
    this._totalAmount = 0.0;
    this._purchaseList = new Array();
    this._sellList = new Array();
  }
}
