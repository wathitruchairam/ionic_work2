import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the StoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  username:any;
  password:any;
  pid:any;
  pnum:string;
  shoppinglist:Array<{proid:string,pronum:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.shoppinglist=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

  setStorage(){
    this.storage.set("username",this.username);
    this.storage.set("shoppinglist",this.shoppinglist);
  }

  getStorage(){
    // this.storage.get('username').then((val) => {
    //  console.log('Your name is' + val);
    // });
    this.storage.get('shoppinglist').then((val) => {
      console.log('name' + val);

      // for(let i=0;i<val.length; i++){
      //   console.log( val[1].proid);
      // }

    });
  }

  clear(){
    this.storage.clear();
  }

  add(){
    this.shoppinglist.push({proid:this.pid,pronum:this.pnum});
  }
}
