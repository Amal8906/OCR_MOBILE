import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path:'',
  component: PagesComponent,
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      loadChildren: ()=>import('./dashboard/dashboard.module').then(m=> m.DashboardPageModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
