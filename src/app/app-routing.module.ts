import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { LoginPageComponent} from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'listaEmpresa',
    component: EmpresaListComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'administrador',
    component: AdminPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'empresa',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
