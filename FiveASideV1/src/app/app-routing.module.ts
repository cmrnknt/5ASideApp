import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component'
import { MatchDetailsComponent } from './match-details/match-details.component';

const routes: Routes = 
[
  {path: '', component: MatchesComponent},
  {path: 'detail/:id', component: MatchDetailsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
