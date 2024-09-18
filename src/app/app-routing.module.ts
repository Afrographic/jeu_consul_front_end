import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
