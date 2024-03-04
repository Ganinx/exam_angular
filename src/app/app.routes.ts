import { Routes } from '@angular/router';
import {AdminListComponent} from "./components/admin-list/admin-list.component";
import {AccueilComponent} from "./components/public/accueil/accueil.component";

export const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path: 'admin', component:AdminListComponent}
];
