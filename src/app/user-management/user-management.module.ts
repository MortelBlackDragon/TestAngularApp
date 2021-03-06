import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SiginInComponent } from './sigin-in/sigin-in.component';
import { AdminComponent } from './admin/admin.component'
import { LoginComponent } from './login/login.component'
console.warn("user manage ment module load")
@NgModule({
  declarations: [SiginInComponent, AdminComponent, LoginComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserManagementModule {


}
