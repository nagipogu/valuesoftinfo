import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component'; 

import { ConfigService } from './services/config.service';
import { CacheService } from './services/cache.service';
import { DataService } from './services/data.service';
import { GetListService } from './services/get-list.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    CacheService,
    ConfigService,
    DataService,
    GetListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
