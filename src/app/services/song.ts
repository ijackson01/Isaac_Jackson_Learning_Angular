import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../models/song';
import { MOCK_SONGS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  // ✅ Copia editable del mock (para poder hacer CRUD)
  private songs: Song[] = [...MOCK_SONGS];

  constructor() {}

  // ✅ READ ALL
  getSongs(): Observable<Song[]> {
    return of(this.songs);
  }

  // ✅ READ (por id)
  getSongById(id: number): Observable<Song | undefined> {
    const found = this.songs.find(s => s.id === id);
    return of(found);
  }

  // Create
  addSong(newSong: Song): Observable<Song[]> {
    this.songs.push(newSong);
    return of(this.songs);
  }

  // Update
  updateSong(updatedSong: Song): Observable<Song[]> {
    const index = this.songs.findIndex(s => s.id === updatedSong.id);
    if (index !== -1) {
      this.songs[index] = updatedSong;
    }
    return of(this.songs);
  }

  // Delete
  deleteSong(id: number): Observable<Song | undefined> {
    const index = this.songs.findIndex(s => s.id === id);
    if (index !== -1) {
      const removed = this.songs.splice(index, 1)[0];
      return of(removed);
    }
    return of(undefined);
  }
}
