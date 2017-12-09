import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { TableComponent } from './table/table.component';
import { TrickComponent } from './trick/trick.component';

import { JassService } from './jass.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    TableComponent,
    TrickComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
