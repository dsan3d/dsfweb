import { Component } from '@angular/core';
import { SAnunciosService } from '../sanuncios.service';

@Component({
  selector: 'principalcults3d',
  templateUrl: './principalcults3d.component.html',
  styleUrls: ['./principalcults3d.component.less']
})
export class Principalcults3dComponent {
  private Vanuncios:SAnunciosService= new SAnunciosService();
  constructor() {}
  
  verAnuncio(){
    this.Vanuncios.VerAnuncios();
  
  }
}
