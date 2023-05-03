import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films/films.component';
import { ClipsComponent } from './clips/clips.component';
import { SeriesComponent } from './series/series.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterModule} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { InfoComponent } from './info/info.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    MainComponent,
    FilmsComponent,
    ClipsComponent,
    SeriesComponent,
    InfoComponent,
    CustomPipePipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
