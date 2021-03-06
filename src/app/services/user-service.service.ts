import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { empty, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  email: string = "";

  constructor(private http: HttpClient) {

  }

  SaveUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let urlSave = "http://localhost:52994/weatherforecast/Save";

    /*this.http.post<User>(urlSave,empty).subscribe(data => {
      this.email = data.Email;
    })*/

    this.http.post<User>(urlSave,user ,httpOptions).subscribe(data => {
      this.email = data.Email;
    })

    console.log(user)
  }

  GetUser() {
    let urlGet = "http://localhost:52994/weatherforecast/Get";
    return this.http.get(urlGet);
  }

}
