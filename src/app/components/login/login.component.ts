import { Router } from '@angular/router';
import { LoginResult } from './../../../models/LoginResponse';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../../models/Credentials';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credenials = new Credentials();
  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginToServer(): void {
    this.loginService.loginRequest(this.credenials).subscribe(
      (loginResult) => {
        alert(loginResult.token + ' ' + loginResult.type);
        this.loginService.token = loginResult.token;
        this.loginService.type = loginResult.type;
        this.loginService.isLoggedIn = true;

        this.router.navigateByUrl(this.loginService.type);



      },
      (err) => { alert(err.message); });
  }


}
