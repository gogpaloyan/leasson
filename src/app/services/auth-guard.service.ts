import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
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
    // if(this.auth.isAuthenticated()){
    //   return of(true)
    // }else{
    //   return this.router.navigate(["login"], {
    //     queryParams:{
    //       accessDenied: true
    //     }
    //   })
    //   return  of(false)
    // }
    // alert(JSON.stringify(this.auth))
    // if(this.auth.token === this.ax){
    //   return of(true)
    // }else{
    //   return of(false)
    // }
    return true

  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return  this.canActivate(childRoute, state)
  // }

  constructor(private auth: AuthService, private router: Router) { }
}
