import { OperationData } from "./operation.entity";

export interface Purchase extends OperationData {}
export class Purchase {

  constructor({timestamp, amount, quantity, stock}: OperationData) {
    this.amount = amount;
    this.timestamp = timestamp;
    this.quantity = quantity;
    this.stock = stock;
  }
}
