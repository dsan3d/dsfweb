import { Injectable, OnInit } from '@angular/core';

enum card { apps, cults, pintura};
@Injectable({
  providedIn: 'root',
  
})
export class CardGaleriaService implements OnInit {

  private imgSource: string[]=['assets/apps/','assets/cults/','assets/minis/'];
  protected imagenesMinis:string[] =['cabrasoldado.png','angelsangre.png','hechicero.png','imperialhand.png','soldadocaos.png'];
  protected imagenesApps: string[] =['cronos.png','GajaresCoches.png','imagendosconversor.png','Reproductormp3.png'];
  protected imagenesCults:string[] =['apellidosanchez.jpg','escudofuertes.jpg','CuevaCovadonga.jpg','insigniatanith.png','separadororin.png'];
  protected cardOrigen:string="";
  public imagenDevuelta:string="";
  private contador=0;
  constructor() { 
    
  }
  ngOnInit(): void {
    if (this.cardOrigen === ""){
      this.rotarImagenes();
      setInterval(() => this.rotarImagenes(),5000); }
  }

  ComprobarContador(longitud:number){
    if (this.contador >= longitud-1){
      this.contador=0;
    }else{ this.contador++;}
  }
  rotarImagenes(){
   this.rotarImagenesApps();
   this.rotarImagenesCults();
   this.rotarImagenesMinis();

  }
  rotarImagenesApps(){
    this.ComprobarContador(this.imagenesApps.length);
    this.imagenDevuelta = this.imgSource[0] + this.imagenesApps[this.contador];
  }
  rotarImagenesCults(){
    this.ComprobarContador(this.imagenesCults.length);    
    this.imagenDevuelta= this.imgSource[1] + this.imagenesCults[this.contador];
  }
  rotarImagenesMinis(){
    this.ComprobarContador(this.imagenesMinis.length);
    this.imagenDevuelta= this.imgSource[2] + this.imagenesMinis[this.contador];
  }

}
