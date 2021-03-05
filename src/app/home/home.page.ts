import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  datat: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  };

  clickok() {
    this.navCtrl.navigateForward('/writepost/'+this.name)
  };



};
