import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'politicasprivacidad',
  templateUrl: './politicasprivacidad.component.html',
  styleUrls: ['./politicasprivacidad.component.less']
})
export class PoliticasprivacidadComponent {
  constructor(private route: ActivatedRoute){}
}
