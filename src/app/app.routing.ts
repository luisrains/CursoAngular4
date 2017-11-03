import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
//parque depende de tienda
const appRoutes: Routes = [
		{path: '', component : HomeComponent},
		{path: '', redirectTo : 'home', pathMatch: 'full'},
		{path: 'home', component : HomeComponent},
		{path: 'animales', component : AnimalsComponent},
		{path: 'contactos', component : ContactComponent},
		{path: 'cuidadores', component : KeepersComponent},
		{path: 'registro', component : RegisterComponent},
		{path: 'login', component : LoginComponent},
		//para cuando algo falle, el ** es para indicar eso
		{path: 'tienda', component : TiendaComponent}
	];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);