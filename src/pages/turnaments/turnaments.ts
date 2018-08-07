import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from "../my-teams/my-teams";
import { TeamsPage } from "../teams/teams";
import { EliteApi } from "../../providers/elite-api/elite-api";


@IonicPage()
@Component({
  selector: 'page-turnaments',
  templateUrl: 'turnaments.html',
})
export class TurnamentsPage {

public turnaments:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private eliteApi:EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurnamentsPage');
this.eliteApi.getTurnaments().then(data=>this.turnaments=data);

  }




///clik event from html page 
itemTapped($event,tourney){
  this.navCtrl.push(TeamsPage,tourney);
}



}
