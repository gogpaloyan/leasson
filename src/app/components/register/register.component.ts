import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myFormRegister: FormGroup
  error:string = ""


  constructor(private  auth: AuthService, private router: Router) {
    this.myFormRegister = new FormGroup({
      "userName": new FormControl("", [Validators.email, Validators.required]),
      "userPassword": new FormControl("", [Validators.required]),
      "userPasswordR": new FormControl("", [Validators.required]),

    })
  }
  submit(){
    if(this.myFormRegister.value.userPassword === this.myFormRegister.value.userPasswordR){
      this.error = ""
      this.router.navigate(["login"])
      return this.auth.register(this.myFormRegister.value.userName,this.myFormRegister.value.userPassword)
    }
    else{
      this.error = "Incorrect password"
    }


  }

  ngOnInit(): void {
  }

}
