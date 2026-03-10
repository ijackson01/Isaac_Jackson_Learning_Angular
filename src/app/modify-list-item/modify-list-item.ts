import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

import { SongService } from '../services/song';
import { Song } from '../models/song';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit {

  form: FormGroup;
  editing = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: SongService,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      artist: ['', Validators.required],
      genre: ['', Validators.required],
      durationSeconds: ['', Validators.required],
      album: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {

      this.editing = true;

      this.service.getSongById(id).subscribe({
        next: song => {
          if (song) {
            this.form.patchValue(song);
          }
        },
        error: err => {
          this.error = 'Error fetching song';
          console.error('Error fetching song:', err);
        }
      });

    }

  }

  onSubmit(): void {

    if (this.form.valid) {

      const song: Song = this.form.value;

      if (song.id) {

        this.service.updateSong(song).subscribe({
          next: () => this.router.navigate(['/']),
          error: err => {
            this.error = 'Error updating song';
            console.error('Error updating song:', err);
          }
        });

      } else {

        song.id = this.service.generateNewId();

        this.service.addSong(song).subscribe({
          next: () => this.router.navigate(['/']),
          error: err => {
            this.error = 'Error adding song';
            console.error('Error adding song:', err);
          }
        });

      }

    }

  }

  onDelete(): void {

    const id = this.form.value.id;

    if (id) {

      this.service.deleteSong(id).subscribe({
        next: () => this.router.navigate(['/']),
        error: err => {
          this.error = 'Error deleting song';
          console.error('Error deleting song:', err);
        }
      });

    }

  }

  navigateToSongList(): void {
    this.router.navigate(['/']);
  }

}
