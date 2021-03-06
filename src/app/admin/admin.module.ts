//configuracion del MODULO en si
//Modulos
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutingModule} from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//component
import {MainComponent} from './components/main/main.components';
import {ListComponent} from './components/list/list.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';

import {UserService} from '../service/user.service';
import {AdminGuard} from '../service/admin.guard';

//pipe
import {SearchPipe} from './pipes/search.pipe';
@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchPipe
  ],
  imports: [
    HttpModule,
    FormsModule,
    AdminRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
   	MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  providers: [
    UserService,
    AdminGuard
   ]
})
export class AdminModule { }