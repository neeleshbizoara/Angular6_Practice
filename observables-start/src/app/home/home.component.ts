import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
    .map(
      (data: number) => {
        return data*2;
      }
    );
    this.numberObsSubscription = myNumber.subscribe(
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

    this.customObsSubscription = myObservable.subscribe(
      (data:string) => {console.log(data);},
      (error:string) => {console.log(error);},
      () => {console.log('Complete')},
    )
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
