import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
   
  @Output()
  kivalasztottSzam=new EventEmitter();


  outputSzam(e:any){
    this.kivalasztottSzam.emit(e.target.value);
  }



}
