import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../../Model/user';
import {UserServiceService} from '../../services/user-service.service'

@Component({
  selector: 'app-sigin-in',
  templateUrl: './sigin-in.component.html',
  styleUrls: ['./sigin-in.component.css']
})
export class SiginInComponent implements OnInit {


  constructor(public user: User,public userService:UserServiceService) {

    console.warn("Sigin in Component load");

  }

  ngOnInit(): void {
    // let user: User;
    console.warn("sigin in load")
  }

  Save(val: any): number {
    //debugger;
    this.user.Email = val.Email;
    this.user.Password = val.PassWord;
    this.user.UserType = val.UserType;
    this.user.EnforceLoginProtection = val.EnforceLoginProtection;

    this.userService.GetUser().subscribe(data=>{
     console.warn(data);
   })
   
    this.userService.SaveUser(this.user);
    
    
    return 1;
  }

}
