import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selectComponent') selectCom;
  //numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;

  color: string;

  value:string ='';
  nrSelect:string;

  onChange(e:Event) {
    this.value = this.nrSelect;
  }
}
