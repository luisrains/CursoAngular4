import { Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `<h2>{{title}}</h2>
              <input type="text" [(ngModel)]="emailContacto"/>
            <button (click)="guardarEmail()">Guardar Email</button>
            `
})
export class GuardarEmailComponent {
  title = 'Guardar email';
  emailContacto : string;

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'));
  }
}