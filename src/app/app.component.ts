import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  studentName: string = 'Isaac Jackson';
  courseName: string = 'MAD 307';
}
