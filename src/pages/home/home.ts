import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { TwoPage } from '../two/two';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  x:any;
  y:any;
  t:number;
  constructor(public navCtrl: NavController,public navParams:NavParams,public alerCtrl: AlertController) {
  

  }



  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friendครับ!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'name',
          placeholder: 'name'
      }
      ],
      buttons: [{
        text: 'Disagree',
        handler: data => {
          console.log('Disagree clicked');
          console.log(data);
        }
      },
      {
        text: 'Agree',
        handler: data => {
          console.log('Agree clicked');
          console.log(data.title);
          console.log(data.name);
        }
      }]
      
    });
    alert.present()
  }



GoToPageTwo(){
  this.t = parseFloat(this.x)  + parseFloat(this.y);
  this.navCtrl.push(TwoPage,{total:this.t});
}


}
