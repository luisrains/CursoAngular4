import { Component, OnInit} from '@angular/core';
import { User} from '../../models/user';
import { UserService} from '../../service/user.service';
import { GLOBAL} from '../../service/global';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService]
})
export class KeepersComponent implements OnInit{
   public title:string;
   public keepers:User[];
   public url;

  constructor(
  	private _userService : UserService
  ){
  	this.title = 'Cuidadores';
  	this.url = GLOBAL.url;
  }

  ngOnInit(){
  		console.log('keepers.component cargado !!');
  		this.getKeepers();
  }


  getKeepers(){
      this._userService.getKeepers().subscribe(
        response=>{
          if(!response.users){
          }else{
            this.keepers = response.users;
          }
        },
        error=>{
          console.log(<any>error);
        });
    }


}
