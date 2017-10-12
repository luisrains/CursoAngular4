import { Component, Input } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
})

export class ParquesComponent{
	@Input() nombre: string;
	//podemos darle un nombre de como se va llamar el parametro en la 
	@Input('metros_cuadrados') metros: number; etiqueta
	public vegetacion: string;
	public abierto: boolean;

	constructor(){
		this.nombre = 'Parque natural para caballos';
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}

}