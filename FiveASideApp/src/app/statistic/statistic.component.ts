import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  goals: number;
  assists: number;
  gamesPlayed: number;

  constructor() { }

  ngOnInit() {
  }

}
