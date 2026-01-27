import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list/song-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SongListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  studentName: string = 'Isaac Jackson';
  courseName: string = 'MAD 307';
}
