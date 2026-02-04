import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../models/song';
import { SongListItemComponent } from '../song-list-item/song-list-item';
import { SongService } from '../services/song';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, SongListItemComponent],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe(data => {
      this.songs = data;
    });
  }

  onSongSelected(song: Song): void {
    console.log('Selected song:', song);
  }
}
