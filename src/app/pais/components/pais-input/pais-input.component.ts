import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
 
  // realizo una emision de buscar el input a los demas componentes 
  // Output onDebounce se realizara para formularios reactivos
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  // debouncer para crear un observable con rxjs
  debouncer: Subject<string> = new Subject();
  termino:string = '';

  // pipe: Decorador que marca una clase como tubería y proporciona metadatos de configuración. {{ exp | myPipe }}
  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      // console.log('debouncer:', valor)
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
