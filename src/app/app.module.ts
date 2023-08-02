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

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    FooterComponent,
    RedessocialesComponent,
    PrincipalComponent,
    PoliticasprivacidadComponent,
    ContactoComponent
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
