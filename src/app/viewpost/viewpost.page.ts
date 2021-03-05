import { crudapi } from './../crudapi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.page.html',
  styleUrls: ['./viewpost.page.scss'],
})
export class ViewpostPage implements OnInit {
  name: string;
  datat: any;
  constructor(public actroute: ActivatedRoute, private menu: MenuController, public alertController: AlertController, private getdata: crudapi, public navCtrl: NavController,) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
    this.name = this.actroute.snapshot.paramMap.get('name');

    this.getdata.readData().subscribe(datas => {

      this.datat = datas.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          topic: e.payload.doc.data()['topic'],
          detail: e.payload.doc.data()['detail']
        };
      });
    });

  }

  cratepost(){
    this.menu.close('first');
    this.navCtrl.navigateForward('/writepost/'+this.name)
  }

  managepost(){
    this.menu.close('first');
    this.navCtrl.navigateForward('/managepost/'+this.name)
  }

}
