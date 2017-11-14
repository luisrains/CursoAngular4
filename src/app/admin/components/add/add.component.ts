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
  public status;
  public filesToUpload;

  constructor(
  	private _route : ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
  	private _animalService: AnimalService,
  	private _uploadService : UploadService
  	){
  		this.title = 'Añadir';
  		this.animal = new Animal('','','',2017,'','');
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBAL.url;
  	}

  	ngOnInit(){
  		console.log('animal componente ha sido cargado');
  	}

    onSubmit(){
      this._animalService.addAnimal(this.token,this.animal).subscribe(
        response =>{
          if(!response.animal){
            this.status = 'error';
          }else{
            this.status = 'success';
            this.animal = response.animal;

            //subir la imagen

            if(this.filesToUpload){
                this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id,[],
                                this.filesToUpload,this.token,'image')
              .then((result:any) =>{
                this.animal.image = result.image;
                this._router.navigate(['/admin-panel/listado/']);
              });
            }else{
              this._router.navigate(['/admin-panel/listado/']);
            }
            
          }
        },
        error =>{
          var errorMessage = <any>error;
          if(errorMessage !=null){
            this.status = 'error';
          }
        });
    }

    fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
