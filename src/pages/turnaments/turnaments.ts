import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from "../my-teams/my-teams";
import { TeamsPage } from "../teams/teams";


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

ionViewWillEnter()
{
  console.log('ionViewWillEnter TurnamentsPage');
}

ionViewWillLeave()
{
  console.log('ionViewWillLeave TurnamentsPage');
}

ionViewWillUnload()
{
  console.log('ionViewWillUnload TurnamentsPage');
}



///clik event from html page 
itemTapped(){
  this.navCtrl.push(TeamsPage);
}



}
