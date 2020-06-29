import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ModalController } from '@ionic/angular';
import { USER_DETAIL, PERSONAL_DETAIL } from './constant'
import { USER_CATEGORY } from '../../@core/constant/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('stepper') private signupStepper: MatStepper;
  
  userCategory = USER_CATEGORY
  isLinear = false;
  personalDetail: FormGroup;
  formData: FormGroup;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.formData = this.fb.group(USER_DETAIL);
    this.personalDetail = this.fb.group(PERSONAL_DETAIL);
  }


  verifyMobile(){
    this.signupStepper.next()
  }

  saveUser(){
    this.signupStepper.next()
  }

  syncMasterData(){
    this.signupStepper.next()
  }

  signupCompletion(){
    this.signupStepper.reset();
    this.router.navigateByUrl('/auth/login')
  }

  
  
}


