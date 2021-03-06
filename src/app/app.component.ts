import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  

  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
   
  }

  public showLogOutDialog(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.loginService.token = '';
      this.loginService.type = '';
      this.loginService.isLoggedIn = false;
      this.router.navigateByUrl('login');
    }

  }

  public isLoggedIn():boolean{
    return this.loginService.isLoggedIn;
  }

 
}
