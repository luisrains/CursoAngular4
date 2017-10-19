//Importar modulos necesarios para crear modulos.
// NgModule para que se comporte como un modulo, y generar un modulo
import {NgModule} from '@angular/core';
// generar modulo
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

//componentes
import {GuardarEmailComponent} from './components/guardar-email/guardar-email.component';
import {MostrarEmailComponent} from './components/mostrar-email/mostrar-email.component';
import {MainEmailComponent} from './components/main-email/main-email.component';

//decorador ngModulo para cargar los componentes y la configuracion del modulo
@NgModule({
	imports : [CommonModule,FormsModule],
	declarations : [
		GuardarEmailComponent,
		MostrarEmailComponent,
		MainEmailComponent
	],
	//cual va ser el componente principal
	exports : [MainEmailComponent]

})

export class ModuloEmailModule {
}