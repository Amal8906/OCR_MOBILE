import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {
    isLoggedIn: Observable<boolean>;

    constructor(
        private router: Router,
        private storage  : Storage,
        private authService: AuthenticationService
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('ocrCurrentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
          this.storage.get('IsRegistered').then((data)=>{
          if(data){ this.router.navigateByUrl('login'); }
          else{ this.router.navigateByUrl('signup'); }
      })
        // this.router.navigate(['auth']);
        return false;
    }


    canLoad(route: Route): boolean {
        if (localStorage.getItem('ocrCurrentUser')) {
            // logged in so return true

            return true;
        }
        this.router.navigate(['auth']);
        return false;
    }
}



