import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import {GLOBAL} from '../../service/global';
import {UserService} from '../../service/user.service';

@Component({
	selector: 'user-edit',
	templateUrl: './user-edit.component.html',
	providers: [UserService]
})

export class UserEditComponent implements OnInit{
	public title:string;
	public user:User;
	public identity;
	public token;
	public status;
	constructor(
		private _route: ActivatedRoute,	
		private _router: Router, 
		private _userService: UserService){

		this.title = 'Actualizar mi datos';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.user = this.identity;
	}

	ngOnInit(){
		console.log('user-edit.component cargado!!');
		
	}

	onSubmit(){
		this._userService.updateUser(this.user).subscribe(
			response =>{
				if(!response.user){
					this.status = 'error'
				}else{
					localStorage.setItem('identity', JSON.stringify(this.user));
					this.status = 'success'
					//aqui debe ir la subida e la imagen
				}
			},
			error =>{
				var errorMessage = <any>error;
				if(errorMessage != null){
					console.log(this.token)
					this.status = 'error';
				}
			}
		)

	}
}