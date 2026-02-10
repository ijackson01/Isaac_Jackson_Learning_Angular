import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Song } from '../models/song';
import { SongService } from '../services/song';
import { SongListItemComponent } from '../song-list-item/song-list-item';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, SongListItemComponent],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  selectedSong?: Song;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    });
  }

  onSongSelected(song: Song): void {
    this.selectedSong = song;
    console.log('Selected song:', song);
  }
}
