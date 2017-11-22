import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {UserService} from './service/user.service';
import {GLOBAL} from './service/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  public title: string;
  public identity;
  public url;

  constructor(
  		private _userService: UserService,
  		private _route: ActivatedRoute,
  		private _router: Router
  ){
  	this.title = "NGZOO";
    this.url = GLOBAL.url;
  }

  ngOnInit(){
  	this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
  	this.identity = this._userService.getIdentity();
    console.log(this.identity);
  }

  logout(){
  	localStorage.clear();
  	this.identity = null;
  	this._router.navigate(['/']);
  }
}
