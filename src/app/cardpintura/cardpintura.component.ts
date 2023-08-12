import { Component, OnInit } from '@angular/core';
import { SAnunciosService } from '../sanuncios.service';
import { CardGaleriaService } from '../card-galeria.service';

@Component({
  selector: 'cardpintura',
  templateUrl: './cardpintura.component.html',
  styleUrls: ['./cardpintura.component.less']
})
export class CardpinturaComponent implements OnInit {
  protected origenImagen: string ="";
  private Vanuncios:SAnunciosService= new SAnunciosService();
  private Gimagenes: CardGaleriaService = new CardGaleriaService();
 

  constructor(){}
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);    
  }

  rotarImagenes() {
   this.Gimagenes.rotarImagenesMinis();
   this.origenImagen = this.Gimagenes.imagenDevuelta;
}
verAnuncio(){
    this.Vanuncios.VerAnuncios();
 
}

}
