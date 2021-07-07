import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
// tab es un operador que dispara un efecto secundario 

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {

  // usamos el ! para indicar que momentaneamente el pais es null
  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activateRoute.params
    // .subscribe( ({id}) => {
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe( pais =>{
    //     console.log(pais);
    //   });
    // });

    // usando un operador de rxjs switchMap toma un observable y retorna otro observable
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);
  }
  
}
