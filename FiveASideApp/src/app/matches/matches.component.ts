import { Component, OnInit } from '@angular/core';
import { MatchComponent } from '../match/match.component'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: MatchComponent[] = 
  [
    new MatchComponent(1, "Test Match", "Done", "LitleWorse", '2017-03-05 3pm', "4", 5, 3, null),
    new MatchComponent(2, "Test Match 2", "Up Next", "LitleBetter", '2017-04-05 3pm', "6", null, null, null),
    new MatchComponent(3, "Test Match 3", "To Confirm", "TerroSquad", null, null, null, null, null)
  ];

  selectedMatch: MatchComponent;

  onSelect(match: MatchComponent): void {
    this.selectedMatch = match;
    alert(this.selectedMatch.title);
  }

  constructor() { }

  ngOnInit() {    
  }

}
