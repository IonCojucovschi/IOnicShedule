import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from "../pages/my-teams/my-teams";
import { GamePage } from "../pages/game/game";
import { TeamsPage } from "../pages/teams/teams";
import { TeamDetailPage } from "../pages/team-detail/team-detail";
import { TurnamentsPage } from "../pages/turnaments/turnaments";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TurnamentsPage
    // HomePage,
    // ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TurnamentsPage
    // HomePage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
