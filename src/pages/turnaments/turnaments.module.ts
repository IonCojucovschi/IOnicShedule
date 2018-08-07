import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurnamentsPage } from './turnaments';

@NgModule({
  declarations: [
    TurnamentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TurnamentsPage),
  ],
})
export class TurnamentsPageModule {}
