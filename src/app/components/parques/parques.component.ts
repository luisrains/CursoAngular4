import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
})

export class ParquesComponent implements OnChanges{
	@Input() nombre: string;
	//podemos darle un nombre de como se va llamar el parametro en la 
	@Input('metros_cuadrados') metros: number; etiqueta
	public vegetacion: string;
	public abierto: boolean;
	//mediante output voy a poder pasar los datos
	@Output() pasameLosDatos = new EventEmitter(); //para poder emitir evento y ejecutarlos fuera

	constructor(){
		this.nombre = 'Parque natural para caballos';
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}
/*HOOKS, OnChanges, OnInit, DoCheck, OnDestroy*/

//será el primero que se ejecuta, cuando se modifique el valor de 
//alguna de las propiedades, es un hook
	ngOnChanges(changes: SimpleChanges){
		console.log(changes);
	}

	emitirEvento(){
		this.pasameLosDatos.emit({
			'nombre' : this.nombre,
			'metros' : this.metros,
			'vegetacion': this.vegetacion,
			'abierto': this.abierto
		});
	}
}