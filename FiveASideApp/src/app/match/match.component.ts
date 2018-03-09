import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  id: number;
  title: string;
  status: string;
  opponent: string;
  time: string;
  court: string;
  goalsFor: number;
  goalsAgainst: number;
  players: PlayerComponent[];

  constructor(id: number, title: string, status: string, opponent: string, time: string, court: string, goalsFor: number, goalsAgainst: number, players: PlayerComponent[]) 
  { 
    this.id = id;
    this.title = title;
    this.status = status;
    this.opponent = opponent;
    this.time = time;
    this.court = court;
    this.goalsFor = goalsFor;
    this.goalsAgainst = goalsAgainst;
    this.players = players;
  }

  ngOnInit() {
  }

}
