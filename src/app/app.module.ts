import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { FooterComponent } from './footer/footer.component';
import { RedessocialesComponent } from './redessociales/redessociales.component';
import { PrincipalComponent } from './principal/principal.component';
import { PoliticasprivacidadComponent } from './politicasprivacidad/politicasprivacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    FooterComponent,
    RedessocialesComponent,
    PrincipalComponent,
    PoliticasprivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
