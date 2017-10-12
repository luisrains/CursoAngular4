import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
})

export class TiendaComponent{
	public titulo;
	public nombreDelParque;

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.nombreDelParque = "";
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

}