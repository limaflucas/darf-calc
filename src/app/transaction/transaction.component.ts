import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../services/broker.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  brokerService: BrokerService;
  
  constructor(brokerService: BrokerService) {
    
    this.brokerService = brokerService;
  }

  ngOnInit(): void {
  }

}
