import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EvenComponent implements OnInit {
  @Input('evenNumber') element: {num:number};
  constructor() { }

  ngOnInit() {
  }

}
