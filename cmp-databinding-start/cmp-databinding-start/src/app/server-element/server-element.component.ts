import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None,Native 
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('serverElement') element: {type:string, name:string, content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  myvar:boolean = false;
  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Test content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    debugger;
    
    console.log(changes.name);

  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log( '1 myvar: ' + this.myvar)
    this.myvar = true;
    console.log(' 2 myvar: ' + this.myvar)
    console.log('ngAfterContentInit called!');
    console.log('Test content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    //console.log(this)
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!')
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}
