import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(public router:Router){​​​​
  }​​​​


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if( localStorage.getItem('admin') && !localStorage.getItem("LoggedIn")){
      //   return true;
      // }
      // else if(!localStorage.getItem('admin') && !localStorage.getItem("LoggedIn")){
      //   this.router.navigate(['/admin'],{​​​​queryParams:{​​​​returnUrl:state.url}​​​​}​​​​)

      //   return false;

      // }

      if(localStorage.getItem('currentuser')){​​​​

        return true;

      }​​​​      
      else {​​​​
     
        this.router.navigate(['/login'],{​​​​queryParams:{​​​​returnUrl:state.url}​​​​}​​​​)

        return false;

      }​​​​
     
     
     
  }
  
}
