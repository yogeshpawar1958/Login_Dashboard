import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   LoginForm= new FormGroup({
    Email:new FormControl("",[Validators.required,Validators.email]),
    Remember :new FormControl(),
    Password:new FormControl("",[Validators.required,Validators.minLength(7)])
  })

  title = 'senwell-task';

  loginForm=()=>{
  console.log("Email id ",this.LoginForm.value.Email)
  console.log("password",this.LoginForm.value.Password)

  console.log(" is remember ",this.LoginForm.value.Remember)

  }

}

