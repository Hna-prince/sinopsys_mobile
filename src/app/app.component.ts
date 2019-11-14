import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Choix d\'une classe',
      url: '/start',
      icon: 'cog'
    },
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
   
    {
      title: 'Tirage',
      url: '/draw',
      icon: 'color-wand'
    },
    {
      title: 'Créer groupes',
      url: '/groupcreation',
      icon: 'add'
    }, {
      title: 'Mes groupes actuels',
      url: '/list-groups',
      icon: 'list'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
