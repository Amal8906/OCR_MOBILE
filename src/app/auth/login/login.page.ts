import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../@core/services';
import { map, finalize } from 'rxjs/operators';


import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public isSubmited: boolean;
    public formData: FormGroup;
    public deptList: any;
    public message: string;
    public currentUser: any;
    
    constructor(
        private authService: AuthenticationService,
        private fb: FormBuilder,       
        public menuCtrl: MenuController,
        public router: Router,
    ) { 
        this.menuCtrl.enable(true);         
    }

    ngOnInit() {

        this.formData = this.fb.group({
            username: ['133455', Validators.required],
            password: ['Password', Validators.required],
            dept: ['0', Validators.required]
        });
        
    }

    
    onLogin() {
      
    }
}