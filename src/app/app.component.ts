import { Component, OnInit } from '@angular/core';
import { Song } from './models/song';
import { SongService } from './services/song';
import { SongListItemComponent } from './song-list-item/song-list-item';
import { SongListComponent } from './song-list/song-list';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SongListItemComponent, SongListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  selectedSong?: Song;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getSongById(2).subscribe(song => {
      this.selectedSong = song;
    });
  }
}
