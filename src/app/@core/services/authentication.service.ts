import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_LOGIN } from '../constant';
import { User } from '../interfaces';
import { Router } from '@angular/router';

@Directive()
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
    
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('ocrCurrentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
        
    }

    getEmitter() {
        return this.fireIsLoggedIn;
      }

   
    _login(loginData: any) {

        return this.http.post<any>(API_LOGIN, loginData)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if(user.status==200){
                    localStorage.setItem('ocrCurrentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.router.navigate(['pages','home']);
                    return user;
                }
                else {return user};
            }));

    }

    _logout() {
        // remove user from local storage to log user out
        // localStorage.clear();
        localStorage.removeItem('bbgsCurrentUser');
        this.currentUserSubject.unsubscribe();
        location.href = 'login';
        // this.router.navigate(['/login']);
    }
}
