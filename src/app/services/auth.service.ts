import {Injectable, Input} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string = ""

  login: string = "admin@mail.ru"
  password: string = "admin"

  auth(login:string, password:string){
    if(login === this.login && password === this.password){
      return 200
    }else{
      return 403
    }

  }

  register(login: string, password: string){
    this.login = login
    this.password = password
      return alert("ok")
  }

  logout(){
    this.token = ""
    return this.router.navigate(["login"])
  }

  constructor(private router: Router) { }
}
