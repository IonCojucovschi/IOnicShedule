import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from "../my-teams/my-teams";

/**
 * Generated class for the TurnamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turnaments',
  templateUrl: 'turnaments.html',
})
export class TurnamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurnamentsPage');
  }

///clik event from html page 
navigate(){
  this.navCtrl.push(MyTeamsPage);
}



}
