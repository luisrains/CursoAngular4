import { Component, OnInit } from '@angular/core';
//para que sepa que existe un namespace
import {trigger, state, style, transition, animate} from '@angular/core';


@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css'],
	animations: [
		trigger('marcar',[
			state('inactive',style({
							border: '5px solid #ccc'
							})),
			state('active',style({
							border: '5px solid yellow',
							background: 'red',
							borderRadius: '50px'
							})),
			transition('inactive => active', animate('3s linear')),
			transition('active => inactive', animate('3s linear'))
			])
		]
})

export class TiendaComponent implements OnInit{
	public titulo;
	public nombreDelParque;
	public miParque;

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.nombreDelParque = "";
	}

	ngOnInit(){
		$('#caja').dotdotdot({});
		$('#textojq').hide();
		$('#botonjq').click(function(){
			$('#textojq').slideToggle();
		});
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	verDatosParque(event){
		//console.log(event);
		this.miParque = event;
	}

	textoRichEditor(content){
    console.log(content);
  }
}