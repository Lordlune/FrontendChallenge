import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  //method to begin de register
  begin(){
    this.route.navigate(['in/register-player'])
  }

}
