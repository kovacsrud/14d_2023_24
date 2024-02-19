import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"",component:MainComponent},
    {path:"userlist",component:UserlistComponent},
    {path:"**",component:NotfoundComponent}
];
