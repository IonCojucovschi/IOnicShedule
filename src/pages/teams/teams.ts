import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from "../team-home/team-home";
import { EliteApi } from "../../providers/elite-api/elite-api";
import * as _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

public teams=[];
private allTeams:any;
private allTeamDivision:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingController:LoadingController,
              private eliteApi:EliteApi) {
  }

  ionViewDidLoad() {

    let selectedTurney=this.navParams.data;

    let loader=this.loadingController.create({
      content:'Geting data..'
    });

    loader.present().then(()=>{
    this.eliteApi.getTuramentData(selectedTurney.id).subscribe(data=>{
      this.allTeams=data.teams;

      this.allTeamDivision=_.chain(data.teams)
                          .groupBy('division')
                          .toPairs()
                          .map(item=>_.zipObject(['divisionName','divisionTeams'],item))
                          .value();

      this.teams=this.allTeamDivision;
      console.log('Division TEams', this.teams);
      loader.dismiss();

     });
    });

    
    console.log('ionViewDidLoad TeamsPage');
  }


goHome()
{
  //this.navCtrl.push(MyTeamsPage);
   this.navCtrl.popToRoot();
}

itemTapped($event,team)
{
  this.navCtrl.push(TeamHomePage,team);
}



}
