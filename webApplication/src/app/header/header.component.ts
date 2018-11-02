import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  //navigateToLink:string
  @Output() navigateTo = new EventEmitter<{navigateToLink:string}>();
  constructor() {  }

  ngOnInit() {
    //this.navigateTo.emit({navigateToLink:'recipes'});
    this.navigateTo.emit({navigateToLink:'recipes'});
  }

  ngAfterViewInit() {
    
  }

  onSelect(url:string) {
    this.navigateTo.emit({navigateToLink: url});
  }

  /*onRecipesClick() {
    debugger;
    this.navigateTo.emit({navigateToLink:'recipes'});
  }

  onShoppingClick() {
    this.navigateTo.emit({navigateToLink:'shoppingList'});
  }*/

}
