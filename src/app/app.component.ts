import { Component } from '@angular/core';
import { Song } from './models/song';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  studentName: string = 'Isaac Jackson';
  courseName: string = 'MAD 307';
}




