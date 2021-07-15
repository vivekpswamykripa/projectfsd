import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router,private fb:FormBuilder) { }
  
  isSubmitted=false;
  loginForm=this.fb.group({
    username:['admin',Validators.required],
    password:['admin',Validators.required]
  });
  
 ngOnInit(){
  
  
 
 }



get formControls(){ 
  return this.loginForm.controls;
}
login()
{
  
  this.isSubmitted=true;
  if(this.loginForm.invalid){
    return;
  }
  this.authService.login(this.loginForm.value);
  this.router.navigateByUrl('/admin');
}
}
