import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-nav-res',
  templateUrl: './nav-res.component.html',
  styleUrls: ['./nav-res.component.css']
})
export class NavResComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
