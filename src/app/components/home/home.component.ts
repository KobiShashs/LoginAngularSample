import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.loginService.isLoggedIn);
    console.log(this.loginService.token);
    console.log(this.loginService.type);
  }

}
