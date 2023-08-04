import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cardapps',
  templateUrl: './cardapps.component.html',
  styleUrls: ['./cardapps.component.less']
})
export class CardappsComponent implements OnInit {
  private imgRutaApps: string = "assets/apps/";
  protected imagenesApps: string[] =['cronos.png','GajaresCoches.png','imagendosconversor.png','Reproductormp3.png'];
  protected contador =0;
  protected origenImagen: string="";
  constructor(){}
  ngOnInit(): void {
    this.rotarImagenes();
    setInterval(() => this.rotarImagenes(),5000);
  }

 rotarImagenes() {
        if (this.contador >= this.imagenesApps.length-1){
          this.contador=0;
        }else{ this.contador++;}
        this.origenImagen= this.imgRutaApps + this.imagenesApps[this.contador];
    }
}
