import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayerComponent } from './player/player.component';
import { StatisticComponent } from './statistic/statistic.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    MatchesComponent,
    PlayerComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
