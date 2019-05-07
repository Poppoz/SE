import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JhComponent } from './jh/jh.component';
import { BrandingComponent } from './branding/branding.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, JhComponent, BrandingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
