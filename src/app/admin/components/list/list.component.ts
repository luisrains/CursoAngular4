import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../../service/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../service/animal.service';
import {UserService} from '../../../service/user.service';
import {UploadService} from '../../../service/upload.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit{
  public title : string;
  public animals : Animal[];

   constructor(
  	private _route : ActivatedRoute,
  	private _router: Router,
  	private _animalService: AnimalService,
  	){
  		this.title = 'Listado de Animales';
  	}

  	ngOnInit(){
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
