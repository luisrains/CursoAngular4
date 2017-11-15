import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes los .ts
import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

import {ModuloEmailModule} from './moduloemail/modulo-email.module';
//modulo nuevo de admin
import {AdminModule} from './admin/admin.module';

import {UserService} from './service/user.service';

//aqui van los export class
@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    SimpleTinyComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  providers: [ appRoutingProviders,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
