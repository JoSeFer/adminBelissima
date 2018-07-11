import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    console.log(this.email, this.password);
     this.authService.loginEmail(this.email, this.password).then((res) => {
      this.flashMensaje.show('Usuario logado correctamente.', { cssClass: 'alert-success', timeout: 4000});
       this.router.navigate(['/administrador']);
     }).catch((err) => {
      this.flashMensaje.show('Usuario no valido.', { cssClass: 'alert-danger', timeout: 4000});
       this.router.navigate(['/login']);
       console.log(this.email, this.password);
     });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle().then((resp) => {
      this.router.navigate(['/administrador']);
    }).catch( err => console.log(err.message));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook().then((resp) => {
      this.router.navigate(['/administrador']);
    }).catch( err => console.log(err.message));
  }
}

