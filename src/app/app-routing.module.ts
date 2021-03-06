import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

/*import {LoginComponent} from './user-management/login/login.component';
import {SiginInComponent} from './user-management/sigin-in/sigin-in.component';*/

const routes: Routes = [
 {path:'Admin',loadChildren:()=>import('./user-management/user-management.module')
  .then(mod=>mod.UserManagementModule)},
 /* {path:'login',component:LoginComponent},
  {path:'signIn',component:SiginInComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
