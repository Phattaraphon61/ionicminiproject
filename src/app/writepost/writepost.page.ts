import { crudapi } from './../crudapi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.page.html',
  styleUrls: ['./writepost.page.scss'],
})
export class WritepostPage implements OnInit {
  name: string;
  topic: string;
  detail: string;

  constructor(public actroute: ActivatedRoute,private menu: MenuController,public alertController: AlertController ,private senddata:crudapi,public navCtrl: NavController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
     this.name = this.actroute.snapshot.paramMap.get('name');
  }

  async presentAlert(mess) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      message: mess,
      buttons: [ {
          text: 'Okay',
          handler: () => {

          }
        }
      ]
    });

    await alert.present();
  }

  sendata(){
    console.log('sdfsfsdf',this.topic)
    if(this.topic == '' || this.topic == undefined){
      this.presentAlert("Please enter a topic");
    }

    if(this.detail == '' || this.detail == undefined){
      this.presentAlert("Please enter a detail");
    }
    if(this.topic != undefined && this.topic != '' ) {
      if(this.detail != '' && this.detail != undefined){
        this.senddata.createData({name:this.name,topic:this.topic,detail:this.detail})
        this.topic = ''
        this.detail = ''
      }
    }
  }


  viewpost(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
    this.navCtrl.navigateForward('/viewpost/'+this.name)
  }

  managepost(){
    this.menu.enable(false, 'first');
    this.menu.close('first');
    this.navCtrl.navigateForward('/managepost/'+this.name)
  }

}
