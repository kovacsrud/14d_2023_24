import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListaComponent } from './components/lista/lista.component';
import { SelectComponent } from './components/select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ListaComponent,SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_alapok';
  selectSzam="1";

  getSelectSzam(e:string){
    this.selectSzam=e;
  }

}
