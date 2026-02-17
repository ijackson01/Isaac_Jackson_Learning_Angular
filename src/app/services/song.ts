import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../models/song';
import { MOCK_SONGS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songs: Song[] = [...MOCK_SONGS];

  getSongs(): Observable<Song[]> {
    return of(this.songs);
  }

  getSongById(id: number): Observable<Song | undefined> {
    return of(this.songs.find(s => s.id === id));
  }

  addSong(song: Song): Observable<Song[]> {
    this.songs.push(song);
    return of(this.songs);
  }

  updateSong(song: Song): Observable<Song[]> {
    const index = this.songs.findIndex(s => s.id === song.id);
    if (index !== -1) {
      this.songs[index] = song;
    }
    return of(this.songs);
  }

  deleteSong(id: number): Observable<Song | undefined> {
    const index = this.songs.findIndex(s => s.id === id);
    if (index !== -1) {
      return of(this.songs.splice(index, 1)[0]);
    }
    return of(undefined);
  }
}
