import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class TwoPage {
  x:number;
  y:number;
  t:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.t= this.navParams.get("total");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoPage');
  }

}
