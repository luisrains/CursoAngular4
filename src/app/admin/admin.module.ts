//configuracion del MODULO en si
//Modulos
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutingModule} from './admin-routing.module';
//component
import {MainComponent} from './components/main/main.components';
import {ListComponent} from './components/list/list.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    AdminRoutingModule,
    CommonModule
  ],
  exports: [
   	MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  providers: [ ]
})
export class AdminModule { }