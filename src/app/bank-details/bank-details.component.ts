import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  
  accountNo;ifscCode;branch;bankName;loanTenure;loanAmt;bankst;aadhar;pan;
  constructor() { }

  ngOnInit(): void {
  }

}
