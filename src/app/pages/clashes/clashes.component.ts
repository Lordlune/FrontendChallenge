import { Component, OnInit } from '@angular/core';
import { championPlayer } from '../register-player/register-player.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-clashes',
  templateUrl: './clashes.component.html',
  styleUrls: ['./clashes.component.scss']
})
export class ClashesComponent implements OnInit {
  //semifinal character array 
  semifinalsBattle: championPlayer[] = [];
  
  //final character array 
  finalBattle: championPlayer[] = [];

  //array of fighters
  champions: any;

  //the champion player 
  champion = new championPlayer();

  //player champion character
  championPlayer: championPlayer
  constructor(
    public dialog: MatDialog
  ) {
    //search champion player
    this.championPlayer = JSON.parse(window.localStorage.getItem('player') || '{}')
    //search champions list for fight with player
    this.champions = (JSON.parse(window.localStorage.getItem('championModels') || '{}'))
  }

  ngOnInit(): void {
    //method to add players in field
    this.semifinalsBattle.push(this.championPlayer);
    for (let i = 0; i < 3; i++) {
      this.semifinalsBattle.push(this.champions[Math.floor(Math.random()*6)]);
    }
  }

  //method to advance champion
  advancePlayer() {
    if (this.finalBattle.length <= 0) {
      this.finalBattle.push(
        this.semifinalsBattle[0],
        this.semifinalsBattle[3]
      )
      return
    }
    this.champion = this.championPlayer
  }

}
