import { Component, OnInit } from '@angular/core';
//para que sepa que existe un namespace

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
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