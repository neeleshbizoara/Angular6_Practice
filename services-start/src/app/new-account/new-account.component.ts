import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../service/logging.service'
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService, private accountsService:AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    //Commented this aas we are using services 

    /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    }); */

    this.accountsService.addAccount(accountName, accountStatus);

    //*******SUPER IMPORTANT************
    //This is not the way to implement servicesin angular
    //Correct way is dependency injection 
    //const service = new LoggingService();
    //service.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
