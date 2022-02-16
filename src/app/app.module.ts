import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FightersComponent } from './fighters/fighters.component';
import { FighterComponent } from './fighter/fighter.component';

@NgModule({
  declarations: [
    AppComponent,
    FightersComponent,
    FighterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
