import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../service/user.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
	public title: String;
	public user: User;

	constructor(private _route: ActivatedRoute,	private _router: Router)
	{
		this.title = 'Login';
		this.user = new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log('login.component cargado!!');
	}
	onSubmit(){
		console.log(this.user);
	}
}