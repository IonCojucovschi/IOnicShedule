import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from "../my-teams/my-teams";

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

public team : any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team=this.navParams.data;
    console.log('** nav params',this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

goHome()
{
  //this.navCtrl.push(MyTeamsPage);
//  this.navCtrl.popToRoot();////   in this case noting is hapened because this page is achild of TeamHomePage and on lick it do nothing
console.log('****parent',this.navCtrl.parent);
this.navCtrl.parent.popToRoot();

}




}
