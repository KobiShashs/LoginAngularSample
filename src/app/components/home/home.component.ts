import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myId: number;
  public constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.loginService.isLoggedIn);
    console.log(this.loginService.token);
    console.log(this.loginService.type);
  }

  public yallaBalagan(): void {
    //this.router.navigate('/stam');
    this.router.navigateByUrl('stam/'+this.myId);
  }

}
