import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  cus_id:any;
  cus_name:any;
  cus_image:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }
  getStorage(){
    this.storage.get('cus_id').then((val) => {this.cus_id = val;});
    this.storage.get('cus_name').then((val) => {this.cus_name = val;});
    this.storage.get('cus_image').then((val) => {this.cus_image = val;});
    // this.storage.get('username').then((val) => {
    //  console.log('Your name is' + val);
    // });
    
  }
  
  logout(){
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
  ionViewWillEnter(){ //ฟอร์มโหลดมาเลย
  this.getStorage();
  }
}
