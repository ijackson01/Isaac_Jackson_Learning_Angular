import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { Song } from '../models/song';
import { SongService } from '../services/song';
import { SongListItemComponent } from '../song-list-item/song-list-item';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SongListItemComponent],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  selectedSong?: Song;

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    });
  }

  onSongSelected(song: Song): void {
    this.selectedSong = song;
  }

  editSong(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  deleteSong(id: number): void {
    this.songService.deleteSong(id).subscribe(() => {
      this.loadSongs();
      if (this.selectedSong && this.selectedSong.id === id) {
        this.selectedSong = undefined;
      }
    });
  }
}
