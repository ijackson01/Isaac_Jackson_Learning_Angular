import { Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list';
import { ModifyListItem } from './modify-list-item/modify-list-item';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },
  { path: 'not-found', component: PageNotFound },
  { path: '**', redirectTo: 'not-found' }
];
