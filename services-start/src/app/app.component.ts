import { Component, OnInit } from '@angular/core';
import { AccountsService } from './service/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name:string, status: string}[] = []

  constructor(private accountService:AccountsService) {}

  ngOnInit() {
    //Note: since accounts here is an array.
    // it is a reference type. This is a normal javascript behavior 
    // so this is a reference type

    //So by setting it equal here we're actully getting access to the 
    //exact same array as stored in th service
    this.accounts = this.accountService.accounts;
  }
}


/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
 */