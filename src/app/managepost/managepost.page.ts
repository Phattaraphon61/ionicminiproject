import { crudapi } from './../crudapi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-managepost',
  templateUrl: './managepost.page.html',
  styleUrls: ['./managepost.page.scss'],
})
export class ManagepostPage implements OnInit {
  author: string;
  topic: string;
  detail: string;
  name: string;
  datat: any;
  constructor(public actroute: ActivatedRoute, private menu: MenuController, public alertController: AlertController, private getdata: crudapi, public navCtrl: NavController,public alertCtrl: AlertController) { }
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
      console.log(this.datat);
    });

  }

  cratepost(){
    this.navCtrl.navigateForward('/writepost/'+this.name)
  }


  async edit(author,topic,detail,id){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit',
      inputs: [
        {
          value: topic,
          name: 'topic',
          type: 'text',
          placeholder: 'Topic',

        },
        {
          value: detail,
          name: 'detail',
          type: 'textarea',
          placeholder: 'Detail',
          cssClass: 'alertDanger'
        },
        {
          value: author,
          name: 'author',
          type: 'text',
          placeholder: 'Author'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Ok',
          handler: (alert) => {
            this.getdata.updateData({id:id,topic:alert.topic,detail:alert.detail,name:alert.author})
          }
        }
      ]
    });

    await alert.present();
  }


  delete(id){
    this.getdata.delete(id);
  }

  viewpost(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
    this.navCtrl.navigateForward('/viewpost/'+this.name)
  }

}
