import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../Models/match'
import { Status } from '../Models/status'
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { Player } from '../Models/player'

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  @Input() match: Match

  constructor(
    private route: ActivatedRoute, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMatch();
  }

  getMatch():void{   
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.fakeGetHero(id);
  }
  
  fakeGetHero(id:number):void{ 
    switch(id){
      case 1:
        this.match = {id:1, title:"Terror? Squad Game", status: Status.Done, opponent:"TerrorSquad", time:'2017-03-05 3pm', court:"4", goalsFor:5, goalsAgainst:3, players: new Player()[0]};
        break;
      case 2:
        this.match = {id:2, title:"Rematch vs P24 - easy", status: Status.UpNext, opponent:"P24", time:'2017-04-05 3pm', court:"4", goalsFor:0, goalsAgainst:0, players: new Player()[0]};
        break;
      case 3:
        this.match = {id:3, title:"Who are these guys?", status: Status.UnScheduled, opponent:"Ackermans", time:"", court:"", goalsFor:0, goalsAgainst:0, players: new Player()[0]};
        break;
    }
  }

  /******************** SERVICE CALLS ********************/
save(match:Match):void{
  alert("Will save: "+match.title);
}


  /********************** NAVIGATION *********************/

  goBack(): void {
    this.location.back();
  }

}
