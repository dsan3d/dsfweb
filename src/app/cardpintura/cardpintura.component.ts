import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardpintura',
  templateUrl: './cardpintura.component.html',
  styleUrls: ['./cardpintura.component.less']
})
export class CardpinturaComponent implements OnInit {
  protected origenImagen: string ="";
  private imgMinis:string ="assets/minis/";
  protected imagenesMinis:string[] =['cabrasoldado.png','angelsangre.png','hechicero.png','imperialhand.png','soldadocaos.png'];
  protected contador =0;

  constructor(){}
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);    
  }

  rotarImagenes() {
    if (this.contador >= this.imagenesMinis.length-1){
      this.contador=0;
    }else{ this.contador++;}
    this.origenImagen= this.imgMinis + this.imagenesMinis[this.contador];
}

}
