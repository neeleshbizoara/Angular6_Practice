import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
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
    
    //create method takes function as an argument. and that function holds asynchronous code.
    const myObservable = Observable.create((observer:Observer<string>) => {
      setTimeout( () => {
        observer.next('first package');
      }, 2000);
      setTimeout( () => {
        observer.next('second package');
      }, 4000);
      setTimeout( () => {
        observer.error('Error package');
        //observer.complete();
      }, 5000);
      setTimeout( () => {
        observer.next('third package');
      }, 6000);
    })

    myObservable.subscribe(
      (data:string) => {console.log(data);},
      (error:string) => {console.log(error);},
      () => {console.log('Complete')},
    )
  }

}
