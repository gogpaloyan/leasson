import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup



  constructor(private  auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      "userEmail": new FormControl("", [
        Validators.required, Validators.email]),
      "userPassword": new FormControl("", [
        Validators.required])
    })

    this.route.queryParams.subscribe((params:Params) => {
      if(params['registered']){
        // registered ok
      }else if(params['accessDenied']){
        // noth recuared

      }

    })
  }

  error:string = ""


  ngOnInit(){
  }

  onSubmit (){
    const userEmail = this.myForm.value.userEmail
    const userPassword = this.myForm.value.userPassword

  if(userEmail.length === 0){
    return this.error = "email incorrect"
  }else if(userPassword.length === 0){
    return this.error = "password incorrect"
  }else{
    let res = this.auth.auth(userEmail, userPassword)
    if(res === 200){
      this.auth.token = "077053132"
      return this.router.navigate(["home"])
    }else{
      return this.error = "incorrect email or password"
    }
  }


  }

}
