import { Injectable, OnInit } from '@angular/core';
import { ImgApps, ImgCults, ImgSources, ImgMinis } from './models/tablas';


@Injectable({
  providedIn: 'root',
  
})
export class CardGaleriaService implements OnInit {

  private imgSource: Map<string,string> = ImgSources;
  protected imagenesMinis:string[] =ImgMinis;
  protected imagenesApps: string[] =ImgApps;
  protected imagenesCults:string[] =ImgCults;
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
    this.imagenDevuelta = this.imgSource.get('apps') + this.imagenesApps[this.contador];
    //this.imagenDevuelta = this.imgSource[0] + this.imagenesApps[this.contador];
  }
  rotarImagenesCults(){
    this.ComprobarContador(this.imagenesCults.length);   
    this.imagenDevuelta  =   this.imgSource.get('cults') + this.imagenesCults[this.contador];
    //this.imagenDevuelta= this.imgSource[1] + this.imagenesCults[this.contador];
  }
  rotarImagenesMinis(){
    this.ComprobarContador(this.imagenesMinis.length);
    this.imagenDevuelta = this.imgSource.get('minis') + this.imagenesMinis[this.contador];
    //this.imagenDevuelta= this.imgSource[2] + this.imagenesMinis[this.contador];
  }

}
