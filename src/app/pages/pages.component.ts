import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(private menu: MenuController,) { }

  ngOnInit() {
    this.menu.enable(true)
  }

}
