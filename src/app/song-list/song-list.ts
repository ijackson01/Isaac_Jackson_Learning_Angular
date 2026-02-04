import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../models/song';
import { SongListItemComponent } from '../song-list-item/song-list-item';
import { MOCK_SONGS } from '../data/mock-content';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, SongListItemComponent],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent {
  songs: Song[] = MOCK_SONGS;

  onSongSelected(song: Song): void {
    console.log('Selected song:', song);
  }
}
