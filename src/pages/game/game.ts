import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { TeamHomePage } from '../team-home/team-home';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
public game :any={};


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi:EliteApi) {
  }

  ionViewDidLoad() {
this.game=this.navParams.data;

  }
  teamTapped(teamId)
  {
    let turneyData=this.eliteApi.getCurentTureny();
    let team=turneyData.teams.fint(t=>t.id===teamId);
    this.navCtrl.push(TeamHomePage,team);
  }
}
