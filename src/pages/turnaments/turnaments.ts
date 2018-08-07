import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
              private eliteApi:EliteApi,
              public loadingController:LoadingController) {
  }

  ionViewDidLoad() {
     let loader=this.loadingController.create({
       content:"Getting turnaments ..",
       ///spinner:"dots"
     });

     loader.present().then(()=>{
       this.eliteApi.getTurnaments().then(
       data=>{
         this.turnaments=data;
         loader.dismiss();
       });
     });
  }




///clik event from html page 
itemTapped($event,tourney){
  this.navCtrl.push(TeamsPage,tourney);
}



}
