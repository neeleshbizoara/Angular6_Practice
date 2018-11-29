import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    myNumber.subscribe(
      (num:number) => {
        console.log(num)
      }
    )
  }

}
