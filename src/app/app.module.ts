import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FightersComponent } from './fighters/fighters.component';
import { FighterComponent } from './fighter/fighter.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { DatatableFightersComponent } from './datatable-fighters/datatable-fighters.component';

@NgModule({
  declarations: [
    AppComponent,
    FightersComponent,
    FighterComponent,
    DatatableFightersComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
