import { Component, OnInit } from '@angular/core';
import { ImgApps, ImgSources } from '../models/tablas';
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
  private ImgSource: string | undefined = ImgSources.get('apps');
  private Vanuncios:SAnunciosService =new SAnunciosService();

  constructor(){
   
  }
  ngOnInit(): void {
    this.CargarImagenes();
  }

  CargarImagenes(){
    this.ImagenCronometro = this.ImgSource + ImgApps[0];
    this.ImagenGarajes = this.ImgSource + ImgApps[1];
    this.ImagenConversor = this.ImgSource + ImgApps[2];
    this.ImagenMpTres = this.ImgSource + ImgApps[3];
    this.ImagenJPeseta = this.ImgSource + ImgApps[4];

  }
  verAnuncio(){
    this.Vanuncios.VerAnuncios();  }

}
