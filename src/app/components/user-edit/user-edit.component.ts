import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import {GLOBAL} from '../../service/global';
import {UserService} from '../../service/user.service';
import {UploadService} from '../../service/upload.service';

@Component({
	selector: 'user-edit',
	templateUrl: './user-edit.component.html',
	providers: [UserService,UploadService]
})

export class UserEditComponent implements OnInit{
	public title:string;
	public user:User;
	public identity;
	public token;
	public status;
	public filesToUpload;
	public url:string;

	constructor(
		private _route: ActivatedRoute,	
		private _router: Router, 
		private _userService: UserService,
		private _uploadService: UploadService,
		){

		this.title = 'Actualizar mi datos';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.user = this.identity;
		this.url  = GLOBAL.url;
	}

	ngOnInit(){
		console.log('user-edit.component cargado!!');
		
	}

	onSubmit(){
		this._userService.updateUser(this.user).subscribe(
			response =>{
				console.log('response',response.user);
				if(!response.user){
					console.log('!user');
					this.status = 'error'
				}else{
					console.log('else');
					localStorage.setItem('identity', JSON.stringify(this.user));
					this.status = 'success'
					//aqui debe ir la subida e la imagen

					this._uploadService.makeFileRequest(this.url+'upload-image-user/'+this.user._id,[],
														this.filesToUpload,this.token,'image')
					.then((result:any) =>{
						console.log('image',result.image);
						this.user.image = result.image;
						localStorage.setItem('identity', JSON.stringify(this.user));
						console.log(this.user);
					});
				}
			},
			error =>{
				console.log('error',);
				var errorMessage = <any>error;
				console.log('error',errorMessage);
				if(errorMessage != null){
					console.log(this.token)
					this.status = 'error';
				}
			}
		);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}
}