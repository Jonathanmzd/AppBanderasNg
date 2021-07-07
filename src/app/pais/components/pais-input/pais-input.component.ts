import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  // realizo una emision de buscar el input a los demas componentes 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino:string = '';

  buscar(){
    this.onEnter.emit( this.termino );
  }

}
