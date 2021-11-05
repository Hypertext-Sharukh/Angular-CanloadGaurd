import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { LoginComponent }  from './login.component';
import { AuthRoutingModule }  from './auth-routing.module';
import { AuthService }  from './services/auth.service';

@NgModule({
  imports: [     
    CommonModule,
	ReactiveFormsModule,
	AuthRoutingModule
  ], 
  declarations: [
    LoginComponent
  ],
  providers: [ AuthService ]
})
export class AuthModule { }