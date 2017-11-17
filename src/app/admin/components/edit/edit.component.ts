import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from '../../../service/global';
import {Animal} from '../../../models/animal';
import {AnimalService} from '../../../service/animal.service';
import {UserService} from '../../../service/user.service';
import {UploadService} from '../../../service/upload.service';
import {fadeLateral} from '../../animation';

@Component({
  selector: 'admin-adit',
  templateUrl: '../add/add.component.html',
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})
export class EditComponent implements OnInit{
  public title = 'Editar';
  public animal : Animal;
  public token;
  public url: string;
  public status;
  public filesToUpload;
  public is_edit;

  constructor(
  	private _route : ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService,
  	private _animalService: AnimalService,
  	private _uploadService : UploadService
  	){
  		this.is_edit = true;
  		this.title = 'Actualizar Animal';
  		this.animal = new Animal('','','',2017,'','');
  		this.token = this._userService.getToken();
  		this.url = GLOBAL.url;
  	}

  	ngOnInit(){
  		console.log('animal componente ha sido cargado');
  		this.getAnimal();
  	}

  	 getAnimal(){
      this._route.params.forEach(
        (params: Params) => {
          let id = params['id'];
          this._animalService.getAnimal(id).subscribe(
            response =>{
            	console.log("el animal es:", response.animal);
              if(!response.animal){
                this._router.navigate(['/']);
              }else{
                this.animal = response.animal;
              }
            },
            error =>{
              console.log(<any>error);
              this._router.navigate(['/']);
            });
        });
    }

    onSubmit(){
    	var id = this.animal._id;
      this._animalService.editAnimal(this.token,id,this.animal).subscribe(
        response =>{
        	console.log("el animal edit",response.animal_actualizado);
          if(!response.animal_actualizado){
            this.status = 'error';
          }else{
            this.status = 'success';
            this.animal = response.animal_actualizado;

            //subir la imagen

            if(this.filesToUpload){
            	console.log('entro en filesToUpload');
                this._uploadService.makeFileRequest(this.url+'upload-image-animal/'+this.animal._id,[],
                                this.filesToUpload,this.token,'image')
              .then((result:any) =>{
              	console.log('entro en result:any',result.image);
                this.animal.image = result.image;
                this._router.navigate(['/animal',this.animal._id]);
              });
            }else{
              this._router.navigate(['/animal',this.animal._id]);
            }
            
          }
        },
        error =>{
        	console.log("entro en error edit")
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
