import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomePageComponent, StoreComponent } from '@my-app/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, StoreComponent,RouterModule, AppRoutingModule, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
