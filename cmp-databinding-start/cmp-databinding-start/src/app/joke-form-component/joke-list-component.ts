import { Component } from '@angular/core';
import { joke } from '../joke';

@Component({
    selector: "joke-list",
    template: `
  <app-joke-form-component (jokeCreated)="addJoke($event)"></app-joke-form-component>
  <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
  })

  export class JokeListComponent {
    jokes: joke[];
  
    constructor() {
      this.jokes = [
        new joke(
          "What did the cheese say when it looked in the mirror?",
          "Hello-me (Halloumi)"
        ),
        new joke(
          "What kind of cheese do you use to disguise a small horse?",
          "Mask-a-pony (Mascarpone)"
        ),
        new joke(
          "A kid threw a lump of cheddar at me",
          "I thought ‘That’s not very mature’"
        )
      ];
    }
  
    addJoke(joke) {
      this.jokes.unshift(joke);
    }
  }