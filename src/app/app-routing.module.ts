import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasprivacidadComponent } from './politicasprivacidad/politicasprivacidad.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrincipalpintorComponent } from './principalpintor/principalpintor.component';
import { Principalcults3dComponent } from './principalcults3d/principalcults3d.component';
import { PrincipalprogramasComponent } from './principalprogramas/principalprogramas.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'politicas', component: PoliticasprivacidadComponent },
  { path:'principal', component: PrincipalComponent},
  { path:'contacto', component :ContactoComponent},
  { path:'pintor', component: PrincipalpintorComponent},
  { path:"cults", component: Principalcults3dComponent},
  { path:'programas', component: PrincipalprogramasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
