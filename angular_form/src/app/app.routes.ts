import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterformComponent } from './components/registerform/registerform.component';

export const routes: Routes = [
    {path:"",component:MainComponent},
    {path:"register",component:RegisterformComponent}
];
