import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TurnamentsPage } from "../turnaments/turnaments";
import { EliteApi } from "../../providers/elite-api/elite-api";
import { TeamHomePage } from "../team-home/team-home";
import { UserSettings } from "../../providers/user-settings/user-settings";

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

favorites:any;

  constructor(private nav:NavController,
              private loadingController:LoadingController,
              private eliteApi:EliteApi,
              private memoryContent:UserSettings) {

  }
ionViewDidLoad() 
{
  this.favorites=this.memoryContent.getAllFavorites();
}

goToTournaments()
{
    this.nav.push(TurnamentsPage);
}

favoriteTapped($event,item)///click event when we click on item form list in this page 
{
 let loader =this.loadingController.create({
   content:'Getting data ...',
   dismissOnPageChange:true
 });
 loader.present();
 console.log("***item favorite clicked value=",item);
 this.eliteApi.getTuramentData(item.tournamentId).subscribe(t=>this.nav.push(TeamHomePage,item.team));
}


}