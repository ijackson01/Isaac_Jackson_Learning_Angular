import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../models/song';
import { MOCK_SONGS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() {}

  getSongs(): Observable<Song[]> {
    return of(MOCK_SONGS);
  }
}
