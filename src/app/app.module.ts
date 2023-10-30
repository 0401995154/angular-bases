import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
