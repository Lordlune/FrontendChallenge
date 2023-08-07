import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Class to create champion model
export class championPlayer {
  name?: string | undefined;
  img?: string | undefined;
}

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.scss']
})
export class RegisterPlayerComponent implements OnInit {

  //Player champion
  championPlayer = new championPlayer()

  //Champions Options
  championModels: championPlayer[] = [
    { name: 'Cassiopeia', img: 'assets/champions-img/cassiopeia.webp' },
    { name: 'Darius', img: 'assets/champions-img/darius.webp' },
    { name: 'Fiora', img: 'assets/champions-img/fiora.webp' },
    { name: 'Galio', img: 'assets/champions-img/Galio.webp' },
    { name: 'Katarina', img: 'assets/champions-img/katarina.webp' },
    { name: 'Morgana', img: 'assets/champions-img/morgana.webp' },
    { name: 'Quinn', img: 'assets/champions-img/quinn.webp' },
  ]

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  //Method to choose champions
  chooseChampion(champion: championPlayer) {
    this.championPlayer = champion;
  }

  //Method to change page and set character in localStorage
  next() {
    this.route.navigate(['in/clashes']);
    window.localStorage.setItem('player', JSON.stringify(this.championPlayer));
    window.localStorage.setItem('championModels', JSON.stringify(this.championModels))
  }

}
