import { Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list';

export const routes: Routes = [
  { path: '', component: SongListComponent },

  {
    path: 'modify',
    loadComponent: () =>
      import('./modify-list-item/modify-list-item')
        .then(m => m.ModifyListItem),
  },

  {
    path: 'not-found',
    loadComponent: () =>
      import('./page-not-found/page-not-found')
        .then(m => m.PageNotFound),
  },

  { path: '**', redirectTo: 'not-found' },
];
