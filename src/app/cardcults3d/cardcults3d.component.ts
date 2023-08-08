import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardcults3d',
  templateUrl: './cardcults3d.component.html',
  styleUrls: ['./cardcults3d.component.less']
})
export class Cardcults3dComponent implements OnInit {
  protected origenImagen: string ="";
  private imgCults:string ="assets/cults/";
  protected imagenesCults:string[] =['apellidosanchez.jpg','escudofuertes.jpg','CuevaCovadonga.jpg','insigniatanith.png','separadororin.png'];
  protected contador =0;

  constructor(){}
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);  }

  rotarImagenes() {
      if (this.contador >= this.imagenesCults.length-1){
        this.contador=0;
      }else{ this.contador++;}
      this.origenImagen= this.imgCults + this.imagenesCults[this.contador];
  }
  verAnuncio(){
    window.open('https://www.highcpmrevenuegate.com/xttvycsk?key=4817978832b9b6ea3c9f5576d3da4266',"_blank");
  }

}
