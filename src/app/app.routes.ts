import { Routes } from '@angular/router';
//import {AdminListComponent} from "./components/admin-list/admin-list.component";
import {AccueilComponent} from "./components/public/accueil/accueil.component";
import {DetailComponent} from "./components/public/detail/detail.component";
import {ListComponent} from "./components/admin/list/list.component";
import {AjoutComponent} from "./components/admin/ajout/ajout.component";
import {LoginComponent} from "./components/public/login/login.component";
import {adminGuard} from "./guards/admin.guard";
import {EditComponent} from "./components/admin/edit/edit.component";

export const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path: 'admin', component:ListComponent, canActivate: [adminGuard]},
  {path:'admin/ajout', component:AjoutComponent,canActivate: [adminGuard]},
  {path:'admin/edit/:id', component:EditComponent,canActivate: [adminGuard]},
  {path: 'login',component:LoginComponent},
  {path: ':id',component:DetailComponent},
];
