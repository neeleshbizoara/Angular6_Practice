import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OddEvenGame';
  evenNumber:number;
  oddNumber:number;

  onGameStarted( count: {counter:number}){
    //console.log("Count: " + count.counter);
    (count.counter%2 === 0) ? this.evenNumber = count.counter : this.oddNumber = count.counter;
    console.log('-------STRAT-------')
    console.log('Even Number: ' + this.evenNumber);
    console.log('Odd Number: ' + this.oddNumber);
    console.log('-------END-------')
  }
}
