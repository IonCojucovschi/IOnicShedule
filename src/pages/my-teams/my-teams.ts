import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TurnamentsPage } from "../turnaments/turnaments";
import { EliteApi } from "../../providers/elite-api/elite-api";
import { TeamHomePage } from "../team-home/team-home";

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

favorites=[
  {
    team:{id:1234,name:'HC Elite 7th', coach:'Micheloti'},
    turnamentID:'segrt34563ery645u45h465u3',
    turnamentName:'MArch madness turnament'

  },
  {
    team:{id:1234,name:'HC Elite', coach:'Micheloti'},
    turnamentID:'segrt34563ery645u45h465u3',
    turnamentName:'Holiday hoops chalenge'

  }
]

  constructor(private nav:NavController,
              private loadingController:LoadingController,
              private eliteApi:EliteApi) {

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
 this.eliteApi.getTuramentData(item.turnamentId).subscribe(t=>this.nav.push(TeamHomePage,item.team));
}


}