import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SiginInComponent } from './sigin-in/sigin-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signIn',component:SiginInComponent}
];

console.warn("usermangement routing module")
@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
