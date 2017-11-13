import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../../service/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../service/animal.service';
import {UserService} from '../../../service/user.service';
import {UploadService} from '../../../service/upload.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class AddComponent implements OnInit{
  public title = 'Agregar';
  public animal : Animal;
  public identity;
  public token;
  public url: string;

  constructor(
  	private _route : ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
  	private _animalService: AnimalService,
  	private _uploadService : UploadService
  	){
  		this.title = 'Añadir';
  		this.animal = new Animal('','',2017,'','');
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBAL.url;
  	}

  	ngOnInit(){
  		console.log('animal componente ha sido cargado');
  	}

}
