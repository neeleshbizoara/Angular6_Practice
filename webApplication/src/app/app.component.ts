import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webportal';
  navigateToLink:string;

  onRoute(data) {
    this.navigateToLink = data.navigateToLink;
  }
  /*   
  onRecipesRoute(url) {
    debugger;
    this.navigateToLink = url.navigateToLink
  }

  onShoppingRoute(url) {
    this.navigateToLink = url.navigateToLink
  } */
}
