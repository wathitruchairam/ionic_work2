import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,ResponseOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  datalist:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
   this.getCustomer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
  getCustomer(){
    this.http.post('http://localhost/webservice/getCustomer.php',null,null)
    .subscribe(
      data=>{
        this.datalist = data.json();
        console.log(data.json()[1].cus_id);
        console.log(data.json()[1].cus_email);
        console.log(data.json()[1].cus_add);
      }
    )
  }

 
}
