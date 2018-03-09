import { Component, OnInit } from '@angular/core';
import { positions } from '../enums/positionTypes'
import { StatisticComponent } from '../statistic/statistic.component'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  name: string;
  kitNumber:number;
  position: positions;
  stats: StatisticComponent;
  
  constructor() { }

  ngOnInit() {
  }

}
