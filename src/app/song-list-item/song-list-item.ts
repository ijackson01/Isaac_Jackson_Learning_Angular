import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../models/song';

@Component({
  selector: 'app-song-list-item',
  standalone: true,
  imports: [CommonModule],
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
