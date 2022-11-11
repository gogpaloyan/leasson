import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate{
  ax: string = "077053132"


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.token === this.ax){
      return of(true)
    }else{
      return this.router.navigate(["login"], {
        queryParams:{
          accessDenied: true
        }
      })
      return  of(false)
    }
  }



  constructor(private auth: AuthService, private router: Router) { }
}
