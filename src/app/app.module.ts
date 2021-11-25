import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { BeerComponent } from './component/beer/beer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './component/search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, BeerComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {}
