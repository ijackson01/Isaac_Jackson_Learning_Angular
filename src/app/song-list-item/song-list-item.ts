import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../models/song';
import { MatButtonModule } from '@angular/material/button';
@Component({

  selector: 'app-song-list-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './song-list-item.html',
  styleUrls: ['./song-list-item.css']
})
export class SongListItemComponent {
  @Input() song!: Song;

  @Output() songSelected = new EventEmitter<Song>();

  selectSong(): void {
    this.songSelected.emit(this.song);
  }
}
