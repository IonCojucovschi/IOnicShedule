import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { TeamHomePage } from '../team-home/team-home';
import { MapPage } from "../map/map";


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
this.game.gameTime=Date.parse(this.game.time);
  }
  teamTapped(teamId)
  {
    let turneyData=this.eliteApi.getCurentTureny();
    let team=turneyData.teams.find(t=>t.id===teamId);
    this.navCtrl.push(TeamHomePage,team);
  }

goToDirections()
{
  //placeholder
}
 
goToMap()
{
  this.navCtrl.push(MapPage,this.game);
} 

isWinner(score1,score2)
{
  return Number(score1)>Number(score2) ? 'primary' : 'danger';
}






}
