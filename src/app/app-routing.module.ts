import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {FilmsComponent} from "./films/films.component";
import {SeriesComponent} from "./series/series.component";
import {ClipsComponent} from "./clips/clips.component";
import {InfoComponent} from "./info/info.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'clips', component: ClipsComponent },
  { path: 'info/:id', component: InfoComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**',  component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
