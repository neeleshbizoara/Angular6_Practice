import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  //navigateToLink:string
  
  constructor(private router:Router) {  }

  ngOnInit() {
    //this.navigateTo.emit({navigateToLink:'recipes'});
    //this.navigateTo.emit({navigateToLink:'recipes'});
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
