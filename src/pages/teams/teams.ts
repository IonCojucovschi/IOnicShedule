import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from "../team-home/team-home";
import { EliteApi } from "../../providers/elite-api/elite-api";


@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

public teams=[];



  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private eliteApi:EliteApi) {
  }

  ionViewDidLoad() {

    let selectedTurney=this.navParams.data;
    this.eliteApi.getTuramentData(selectedTurney.id).subscribe(data=>{
      this.teams=data.teams;

    })
    console.log('ionViewDidLoad TeamsPage');
  }

itemTapped($event,team)
{
  this.navCtrl.push(TeamHomePage,team);
}



}
