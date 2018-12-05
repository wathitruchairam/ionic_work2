import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { ShowPage } from '../show/show';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  cus_email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl: AlertController,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
Login(){
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new ResponseOptions({headers:headers});
  let body = {cus_email:this.cus_email};

  this.http.post("http://localhost/webservice/getLogin2.php",body,options)
  //ส้งค่ามาที่data
  .subscribe(data=>{
    if(data.json()[0].cus_id!=null){
     
      this.storage.set("cus_id",data.json()[0].cus_id);
      this.storage.set("cus_name",data.json()[0].cus_name);
      this.storage.set("cus_email",data.json()[0].cus_email);
      this.storage.set("cus_image","http://127.0.0.1/"+data.json()[0].cus_image);
      this.navCtrl.setRoot(ShowPage);
    }else{
      this.Nologin();
    }
  },error=>{
        console.log("เชื่อมบ่ได้เด้อ")
      })
  }
  


  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  Nologin() {
    const alert = this.alertCtrl.create({
      title: 'Not Login!',
      subTitle: 'request Email!',
      buttons: ['OK']
    });
    alert.present();
  }
}
