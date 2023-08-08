import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'politicasprivacidad',
  templateUrl: './politicasprivacidad.component.html',
  styleUrls: ['./politicasprivacidad.component.less']
})
export class PoliticasprivacidadComponent implements OnInit {
  
  public mostrarConversor : boolean =false;
  public mostrarMp3 :boolean= false;
  
  constructor(private route: ActivatedRoute){
   
  }
  ngOnInit(){
    this.mostrarConversor =false;
    this.mostrarMp3 = false;
  }

}


