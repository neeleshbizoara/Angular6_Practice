import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  //navigateToLink:string
  
  constructor(private router:Router) {  }
  printX:number;

  ngOnInit() {
    //this.navigateTo.emit({navigateToLink:'recipes'});
    //this.navigateTo.emit({navigateToLink:'recipes'});

      const myInterval = Observable.interval(1000);
      myInterval.subscribe((x : number)=>{
        this.printX=x;
        console.log(this.printX)
      });
    
  }

  ngAfterViewInit() {
    
  }

  
  /*onRecipesClick() {
    debugger;
    this.navigateTo.emit({navigateToLink:'recipes'});
  }

  onShoppingClick() {
    this.navigateTo.emit({navigateToLink:'shoppingList'});
  }*/

}
