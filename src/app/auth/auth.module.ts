import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from '@auth/register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    SharedModule
  ],
  declarations: [FormComponent, RegisterComponent, LoginComponent],
  providers: [AuthService]
})
export class AuthModule { }
