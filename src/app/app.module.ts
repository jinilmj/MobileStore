import { MobileEffects } from './mobiles/mobile.effects';
import { mobileReducer } from './mobiles/mobile.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { AppState } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    MobileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({ mobile: mobileReducer }),
    EffectsModule.forRoot([MobileEffects])   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
