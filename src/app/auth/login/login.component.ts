import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthService) { }

  ngOnInit(): void {

  }

  checkLogin() {
    if (this.loginservice.authentification(this.login, this.password)
    ) {
      this.router.navigate(['list-clients']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
