import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadboardComponent } from './headboard/headboard.component';
import { FooterComponent } from './footer/footer.component';
import { RedessocialesComponent } from './redessociales/redessociales.component';
import { PrincipalComponent } from './principal/principal.component';
import { PoliticasprivacidadComponent } from './politicasprivacidad/politicasprivacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PolityConversorCryptoComponent } from './polity-conversor-crypto/polity-conversor-crypto.component';
import { PolityReproMp3Component } from './polity-repro-mp3/polity-repro-mp3.component';
import { CardappsComponent } from './cardapps/cardapps.component';
import { Cardcults3dComponent } from './cardcults3d/cardcults3d.component';
import { CardpinturaComponent } from './cardpintura/cardpintura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    FooterComponent,
    RedessocialesComponent,
    PrincipalComponent,
    PoliticasprivacidadComponent,
    ContactoComponent,
    PolityConversorCryptoComponent,
    PolityReproMp3Component,
    CardappsComponent,
    Cardcults3dComponent,
    CardpinturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
