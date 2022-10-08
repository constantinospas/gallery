import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { favoritesReducer } from './store/favorites/favorites.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({favorites: favoritesReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
