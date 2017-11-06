import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import {GLOBAL} from '../../service/global';
import {UserService} from '../../service/user.service';

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	providers: [UserService]
})

export class RegisterComponent implements OnInit{
	public title: String;
	public user: User;

	constructor(private _route: ActivatedRoute,	private _router: Router, private _userService: UserService)
	{
		this.title = 'Registro';
		this.user = new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log('register.component cargado!!');
		console.log(this._userService);
	}

	onSubmit(){
		console.log(this.user);

	}
}