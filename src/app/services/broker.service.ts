import { Injectable } from "@angular/core";
import { Broker } from "./entities/broker.entity";

@Injectable({ providedIn: 'root' })
export class BrokerService {

  private _broker: Broker;

  constructor() {
    this._broker = new Broker();
  }

  purchaseShares(): boolean {

    return true;
  }
  
  sellShares(): boolean {

    return true;
  }
}
