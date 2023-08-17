import { Component, OnInit } from '@angular/core';
import { SAnunciosService } from '../sanuncios.service';
import { CardGaleriaService } from '../card-galeria.service';

@Component({
  selector: 'app-cardapps',
  templateUrl: './cardapps.component.html',
  styleUrls: ['./cardapps.component.less']
})
export class CardappsComponent implements OnInit {
 
  private Vanuncios:SAnunciosService =new SAnunciosService();
  private GImagenes:CardGaleriaService= new CardGaleriaService();
  
  protected origenImagen: string="";
  constructor(){}
 
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);
  }
  rotarImagenes(){
    this.GImagenes.rotarImagenesApps();
    this.origenImagen = this.GImagenes.imagenDevuelta;
  }

  verAnuncio(){
      this.Vanuncios.VerAnuncios();}
}
