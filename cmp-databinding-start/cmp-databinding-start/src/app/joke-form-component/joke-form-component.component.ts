import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { joke } from '../joke';

@Component({
  selector: 'app-joke-form-component',
  templateUrl: './joke-form-component.component.html',
  styleUrls: ['./joke-form-component.component.css']
})
export class JokeFormComponentComponent implements OnInit {

  constructor() { }
  
  @Output() jokeCreated = new EventEmitter<joke>()

  createJoke(setup: string, punchline: string){
    this.jokeCreated.emit(new joke(setup, punchline))
  }

  ngOnInit() {
  }

}
