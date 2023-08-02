import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasprivacidadComponent } from './politicasprivacidad/politicasprivacidad.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'politicas', component: PoliticasprivacidadComponent },
  { path:'principal', component: PrincipalComponent},
  { path:'contacto', component :ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
