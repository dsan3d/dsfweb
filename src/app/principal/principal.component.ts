import { Component, OnInit } from '@angular/core';
import { SAnunciosService } from '../sanuncios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less']
})


export class PrincipalComponent implements OnInit {  
  private Vanuncios:SAnunciosService = new SAnunciosService();
  constructor(){}
  ngOnInit(): void {
    
  }
  verAnuncio(){
    this.Vanuncios.VerAnuncios();  }

  
}
