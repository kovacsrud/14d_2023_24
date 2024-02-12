import { Component } from '@angular/core';
import { NgFor,NgIf,CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
    nevek=["Elek","Zénó","Anna","Janka","Mátyás","Ella"];
    //nevek=[];

    elemTorles(i:number){
      this.nevek.splice(i,1);
    }
    elemHozzaad(e:any){
      e.preventDefault();
      this.nevek.push(e.target.elements.nev.value);
    }
}
