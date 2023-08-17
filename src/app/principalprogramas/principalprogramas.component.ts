import { Component, OnInit } from '@angular/core';
import { ImgApps, ImgSource } from '../models/tablas';
import { SAnunciosService } from '../sanuncios.service';

@Component({
  selector: 'app-principalprogramas',
  templateUrl: './principalprogramas.component.html',
  styleUrls: ['./principalprogramas.component.less']
})
export class PrincipalprogramasComponent implements OnInit {
  protected ImagenCronometro: string ="";
  protected ImagenGarajes: string ="";
  protected ImagenConversor: string ="";
  protected ImagenMpTres: string ="";
  protected ImagenJPeseta: string ="";
  private Vanuncios:SAnunciosService =new SAnunciosService();

  constructor(){}
  ngOnInit(): void {
    this.ImagenCronometro = ImgSource[0]+ ImgApps[0];
    this.ImagenGarajes = ImgSource[0] + ImgApps[1];
    this.ImagenConversor = ImgSource[0] + ImgApps[2];
    this.ImagenMpTres = ImgSource[0] + ImgApps[3];
    this.ImagenJPeseta = ImgSource[0] + ImgApps[4];
  }

  verAnuncio(){
    this.Vanuncios.VerAnuncios();  }

}
