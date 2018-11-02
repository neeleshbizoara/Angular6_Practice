import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameCounter:number = 0;
  gameTimer;
  @Output('') gameStarted = new EventEmitter<{counter:number }>();
  @Output('') gameStop = new EventEmitter<{counter:number}>();
  constructor() { }

  ngOnInit() {
  }

  

  onStartGame() {
    console.log('On Start Game!')
    this.gameTimer = setInterval(() => {
      this.gameCounter = this.gameCounter+1;
      this.gameStarted.emit({counter: this.gameCounter})
    }, 1000)
    // this.gameStarted.emit({counter: this.gameCounter++});
  }

  onEndGame() {
    console.log('On End Game!');
    clearInterval(this.gameTimer);
  }

}
