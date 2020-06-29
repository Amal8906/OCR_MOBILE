import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
