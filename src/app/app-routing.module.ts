import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AutocompleteComponent} from './pages/form-control/autocomplete/autocomplete.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent },
  {
    path: 'form-control',
    children: [
      {path: 'autocomplete', component: AutocompleteComponent},
      // {path: 'heroes', component: ManageHeroesComponent},
      // {path: '', component: AdminDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
