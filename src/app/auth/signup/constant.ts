import { Validators } from '@angular/forms';

export const USER_DETAIL = {
    firstName       : ['', Validators.required],
    lastName        : ['', Validators.required],
    mobileOrEmail   : ['', Validators.required],
    mobile          : ['', Validators.required],
    email           : ['', Validators.required],
    password        : ['', Validators.required],
    confirmPassword : ['', Validators.required],
    userCategory    : ['', Validators.required]
  };

export const PERSONAL_DETAIL = { 
    gender      : ['', Validators.required],
    dob         : ['', Validators.required],
    instituteId : [1, Validators.required],
    course      : ['', Validators.required],
    qualification   : ['', Validators.required],
    subjects        : ['', Validators.required],
  };


