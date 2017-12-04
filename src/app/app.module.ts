import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { TableComponent } from './table/table.component';
import { TrickComponent } from './trick/trick.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    TableComponent,
    TrickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
