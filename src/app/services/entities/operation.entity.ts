import { Stock } from "./stock.entity";

export interface OperationData {

  timestamp: Date;
  amount: Number;
  quantity: Number;
  stock: Stock;
}
