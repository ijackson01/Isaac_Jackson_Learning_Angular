import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { MOCK_SONGS } from '../data/mock-content';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private apiUrl = 'api/songs';
  private songs: Song[] = [...MOCK_SONGS];

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getSongById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addSong(song: Song): Observable<Song> {
    song.id = this.generateNewId();
    return this.http.post<Song>(this.apiUrl, song).pipe(
      catchError(this.handleError)
    );
  }

  updateSong(song: Song): Observable<Song> {
    const url = `${this.apiUrl}/${song.id}`;
    return this.http.put<Song>(url, song).pipe(
      catchError(this.handleError)
    );
  }

  deleteSong(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  generateNewId(): number {
    return this.songs.length > 0
      ? Math.max(...this.songs.map(song => song.id)) + 1
      : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
