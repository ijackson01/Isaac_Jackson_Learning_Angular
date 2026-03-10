import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { Song } from '../models/song';
import { SongService } from '../services/song';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  selectedSong?: Song;
  error: string | null = null;

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    this.songService.getSongs().subscribe({
      next: (data: Song[]) => {
        this.songs = data;
        this.error = null;
      },
      error: err => {
        this.error = 'Error fetching songs';
        console.error('Error fetching songs', err);
      }
    });
  }

  selectSong(song: Song): void {
    this.selectedSong = song;
  }

  editSong(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  deleteSong(id: number): void {
    this.songService.deleteSong(id).subscribe({
      next: () => {
        this.loadSongs();
        if (this.selectedSong && this.selectedSong.id === id) {
          this.selectedSong = undefined;
        }
        this.error = null;
      },
      error: err => {
        this.error = 'Error deleting song';
        console.error('Error deleting song', err);
      }
    });
  }
}
