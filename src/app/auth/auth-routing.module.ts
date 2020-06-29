import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [{
  path:'',
  component: AuthComponent,
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: ()=>import('./login/login.module').then(m=> m.LoginPageModule)
    },
    {
      path: 'signup',
      loadChildren: ()=>import('./signup/signup.module').then(m=> m.SignupPageModule)
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
