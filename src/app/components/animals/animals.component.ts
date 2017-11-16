import { Component, OnInit} from '@angular/core';
import {Animal} from '../../models/animal';
import {AnimalService} from '../../service/animal.service';
import {GLOBAL} from '../../service/global';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  providers:[AnimalService],
})
export class AnimalsComponent implements OnInit{
	public  title : string;
	public animals: Animal[];
	public url: string

  constructor(
  	private _animalService: AnimalService
  ){
  	this.title = "Animales",
  	this.url = GLOBAL.url
  }
  ngOnInit(){
  		console.log('animals.component cargado !!');
  		console.log(this.getAnimals())
  }

  getAnimals(){
      this._animalService.getAnimals().subscribe(
        response=>{
          if(!response.animales){
          }else{
            this.animals = response.animales;
          }
        },
        error=>{
          console.log(<any>error);
        });
    }
}
