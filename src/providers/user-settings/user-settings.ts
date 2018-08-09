import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class UserSettings {

  constructor(public storage: Storage) {
    console.log('Hello UserSettingsProvider Provider');
  }

favoriteTeam(team,turnamentId, turnamentName)
{
  let item ={team:team, tournamentId:turnamentId, tournamentName:turnamentName};
  this.storage.set(team.id.toString(),JSON.stringify(item));
}
unfavoriteTeam(team)
{
 this.storage.remove(team.id.toString());
}
isFavoriteTeam(teamId: string):Promise<boolean>
{
  return this.storage.get(teamId).then(value=>value ? true :false);
}

getAllFavorites()
{
  let result=[];
  this.storage.forEach(data=>{
    console.log('***inside for each',data);
    result.push(JSON.parse(data));
  });
  return result;
}

}
