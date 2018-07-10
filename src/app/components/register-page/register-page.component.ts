import { Component, OnInit } from '@angular/core';
import { SalirService } from '../../services/salir.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public salirService: SalirService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.salirService.registerUser(this.email, this.password).then((res) => {
      
      this.router.navigate(['/administrador']);
    }).catch ((err) => {
      console.log(err);
    });
  }

}
