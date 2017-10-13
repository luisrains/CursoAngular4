import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
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
/* _________________HOOKS, OnChanges, OnInit, DoCheck, OnDestroy_________________________*/

//será el primero que se ejecuta, cuando se modifique el valor de 
//alguna de las propiedades, es un hook
	ngOnChanges(changes: SimpleChanges){
		console.log(changes);
	}

//cuando se carga el componente, y se inicializa la directiva <parques>
//se ejecuta una sola vez, cada vez que se carga a panalla o el componente con la directiva
//nos indica que el componente ha sido cargado
	ngOnInit(){
		console.log("Metodo on init lanz");
	}

//se ejecuta despus el onInit, se lanza cuando hay un cambio en el componente, 
//se cambia de pagina, este metodo estará comprobando cosas.
//Cuando se ejecuta cualquier evento en cualquier componente.
	ngDoCheck(){
		console.log("el doCheck se ha lanzado");
	}

//se ejecuta antes que angular elimine un componente o antes que 
//destruya la directiva. Podemos vaciar las variables entre otros
	ngOnDestroy(){
		console.log("onDestroy se ha ejecuado");
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