import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})

export class LoginComponent implements OnInit{
	public title: String;
	public user: User;
	public identity;
	public token;
	public status;

	constructor(private _route: ActivatedRoute,	private _router: Router, private _userService: UserService)
	{
		this.title = 'Login';
		this.user = new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log('login.component cargado!!');
		console.log(this._userService.getIdentity());
	}
	onSubmit(){
		//loguear al usuario y obtener los datos
		this._userService.singup(this.user).subscribe(
			response=>{
				this.identity = response.userf;
				if(!this.identity || !this.identity._id){
					alert('el usuario no se ha logueado correctamente')
				}else{
					localStorage.setItem('identity',JSON.stringify(this.identity));
					//obtener el token
					this._userService.singup(this.user,'true').subscribe(
						response=>{
							console.log('segundo singup');
							this.token = response.token;
							if(this.token.length <= 0){
								alert('el token no se ha generado')
							}else{
								localStorage.setItem('token',this.token);
								this.status ='success'
								//vamos al home
								this._router.navigate(['/']);
							}

						},
						error =>{
							console.log(<any>error);
						}
					);

				}

			},
			error =>{
				var errorMessage = <any>error;
				if(errorMessage!=null){
					var body = JSON.parse(error._body);
					this.status = 'error';
				}
			}
		);
	}
}