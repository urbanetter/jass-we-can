import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { TableComponent } from './table/table.component';
import { TrickComponent } from './trick/trick.component';
import { StyleComponent } from './style/style.component';

import { JassService } from './jass.service';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    TableComponent,
    TrickComponent,
    StyleComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
