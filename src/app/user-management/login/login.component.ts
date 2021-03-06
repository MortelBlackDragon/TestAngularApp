import { Component, OnInit } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { console.warn("Login Component load")}


  ngOnInit(): void {
  }

  login(event:any,Email:any ,Password:any){
    debugger;
    if (event.key === "Enter" || event.type=="click") {
      //alert(Email.value +" loged in");
      //this.router.navigate(['/signIn']);
      this.router.navigate(['/signIn']);
    }
    
  }
}
