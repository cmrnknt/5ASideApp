import { Component, OnInit } from '@angular/core';
import { Match } from '../Models/match'
import { Status } from '../Models/status'
import {Player} from '../Models/player'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: Match[]; 
  selectedMatch: Match;

  constructor() { }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(match: Match): void {
    this.selectedMatch = match;
  }

  getHeros() : void{
    //this will call a service which will call on a c# backend
    this.matches = 
    [  
      {id:1, title:"Terror? Squad Game", status: Status.Done, opponent:"TerrorSquad", time:'2017-03-05 3pm', court:"4", goalsFor:5, goalsAgainst:3, players: new Player()[0]},
      {id:2, title:"Rematch vs P24 - easy", status: Status.UpNext, opponent:"P24", time:'2017-04-05 3pm', court:"4", goalsFor:0, goalsAgainst:null, players: null},
      {id:3, title:"Who are these guys?", status: Status.UnScheduled, opponent:"Akermans", time:"", court:"", goalsFor:0, goalsAgainst:0, players: new Player()[0]},
    ];
  }

  delete(match: Match) : void{
    alert("This would delete the match: "+match.title);
  }

}
