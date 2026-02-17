import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SongService } from '../services/song';
import { Song } from '../models/song';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css'],
})
export class ModifyListItem implements OnInit {

  form!: FormGroup;
  editing = false;

  constructor(
    private fb: FormBuilder,
    private service: SongService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      artist: ['', Validators.required],
      genre: ['', Validators.required],
      durationSeconds: ['', Validators.required],
      album: [''],
      imageUrl: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editing = true;

      this.service.getSongById(Number(id)).subscribe(song => {
        if (song) {
          this.form.patchValue(song);
        }
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;

    const song: Song = this.form.value;

    if (this.editing) {
      this.service.updateSong(song).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.service.addSong(song).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  reset(): void {
    this.form.reset();
  }
}
