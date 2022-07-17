import { OperationData } from "./operation.entity";

export interface Sell extends OperationData {}
export class Sell {
  
  constructor({timestamp, amount, quantity, stock}: OperationData) {
    this.amount = amount;
    this.timestamp = timestamp;
    this.quantity = quantity;
    this.stock = stock;
  }
}
