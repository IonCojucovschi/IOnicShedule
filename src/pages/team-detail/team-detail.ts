import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyTeamsPage } from "../my-teams/my-teams";

import * as _ from 'lodash';
import { EliteApi } from "../../providers/elite-api/elite-api";
import { GamePage } from '../game/game';
import moment from 'moment';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

private allGames :any[];
public dateFilter:string;
public team : any = {};
public games:any[];
private tourneyData: any;
private teamStanding:any={};
public useDateFilter=false;
public isFollowing=false;


  constructor(private alertController:AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApli:EliteApi) {}

  ionViewDidLoad() {
    this.team=this.navParams.data;
    
    this.tourneyData=this.eliteApli.getCurentTureny();
    this.games=_.chain(this.tourneyData.games)
                .filter(g=>g.team1Id===this.team.id || g.team2Id===this.team.id)
                .map(g=>{
                   let isTeam1=(g.team1Id===this.team.id);
                   let oponentName=isTeam1 ? g.team2 : g.team1;
                   let scoreDisplay=this.getScoreDisplay(isTeam1,g.team1Score,g.team2Score);
                  return {
                    gameId:g.id,
                    opponent: oponentName,
                    time:Date.parse(g.time),
                    location:g.location,
                    locationUrl:g.locationUrl,
                    scoreDisplay:scoreDisplay,
                    homeAway:(isTeam1 ? "vs." : "at")
                  };
                }).value();
 
      this.allGames=this.games;
      this.teamStanding=_.find(this.tourneyData.standings,{'teamId':this.team.id});          
  }




dateChanged()////when you change date
{
  if(this.useDateFilter)
  {
   this.games=_.filter(this.allGames,g=>moment(g.time).isSame(this.dateFilter,'day'));
  }
  else
  {
    this.games=this.allGames;
  }
}

getScoreDisplay(isTeam1,team1Score,team2Score)
 {

   if(team1Score && team2Score)
   {
     var teamScore=(isTeam1 ? team1Score :team2Score);
     var opponentScore=(isTeam1 ? team2Score :team1Score);
     var winIndicator=teamScore > opponentScore ? "W: " : " L: ";
     return winIndicator + teamScore + "-"+ opponentScore;
   }
   else
   {
     return "";
   }
  }


  itemIsClicked($event,game)
  {
      let sourceGame=this.tourneyData.games.find(g=>g.id===game.gameId);
      this.navCtrl.parent.parent.push(GamePage, sourceGame);
  }

getScoreWorL(game)
{
  return game.scoreDisplay ? game.scoreDisplay[0] : '';
}

getScoreDisplayBadgeClass(game)
{
  return game.scoreDisplay.indexOf('W:')=== 0 ? 'primary' :'danger';
}

toggleFollow()
{
  if(this.isFollowing)
  {
    let confirm=this.alertController.create({
    title:'Unfollow?',
    message:'Are you sure you want to unfollow?',
    buttons:[{
      text:'Yes',
      handler:()=>{
        this.isFollowing=false;
        /// TO DO INTEGRATE WITH DATA BASE :
      }
    },
    {
      text:'No',
      handler:()=>{
        this.isFollowing=true;
        /// TO DO INTEGRATE WITH DATA BASE :
      }
    }
    ]});
    confirm.present();

  }
  else
  {
     this.isFollowing=true;
     ////   persist data
  }
}




}
