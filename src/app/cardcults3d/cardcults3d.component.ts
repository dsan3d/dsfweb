import { Component, OnInit } from '@angular/core';
import { SAnunciosService } from '../sanuncios.service';
import { CardGaleriaService } from '../card-galeria.service';

@Component({
  selector: 'cardcults3d',
  templateUrl: './cardcults3d.component.html',
  styleUrls: ['./cardcults3d.component.less']
})
export class Cardcults3dComponent implements OnInit {
  protected origenImagen: string ="";
  private Vanuncios:SAnunciosService= new SAnunciosService();
  private Gimagenes:CardGaleriaService = new CardGaleriaService();
  
  constructor(){}
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);  }

  rotarImagenes() {
     this.Gimagenes.rotarImagenesCults();
     this.origenImagen = this.Gimagenes.imagenDevuelta;
  }
  verAnuncio(){
    this.Vanuncios.VerAnuncios();
  
  }

}
