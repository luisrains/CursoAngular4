import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
})

export class TiendaComponent{
	public titulo;
	public nombreDelParque;
	public miParque;

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.nombreDelParque = "";
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	verDatosParque(event){
		//console.log(event);
		this.miParque = event;
	}
}