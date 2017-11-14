import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'prodducto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{
  title = 'Productos';

  ngOnInit(){
  		console.log('producto.component cargado !!');
  }
}