import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'politicasprivacidad',
  templateUrl: './politicasprivacidad.component.html',
  styleUrls: ['./politicasprivacidad.component.less']
})
export class PoliticasprivacidadComponent {
  
  public mostrarConversor : boolean =false;
  public mostrarMp3 :boolean= false;
  
  constructor(private route: ActivatedRoute){
   
  }
  OnInit(){
    this.mostrarConversor =false;
    this.mostrarMp3 = false;
  }

/*
  enlaceConversorClick(){
    
    let mydiv = document.getElementById('conversor') as HTMLDivElement;
    if (mydiv.style.display != 'none'){
      mydiv.style.display = 'block';
    }
    else{
      mydiv.style.display='none' ;
    }
  }*/
}


