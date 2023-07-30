import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { FooterComponent } from './footer/footer.component';
import { RedessocialesComponent } from './redessociales/redessociales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    FooterComponent,
    RedessocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
