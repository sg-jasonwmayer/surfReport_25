import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from "./card/card.component";

import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from "./grid-list/grid-list.component";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatCardModule, MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    CardComponent,
    MatGridListModule,
    GridListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
