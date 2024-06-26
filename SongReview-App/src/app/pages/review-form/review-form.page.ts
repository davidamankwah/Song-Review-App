import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongsService, Song } from '../../services/song.service';
import { Router } from '@angular/router';

/**
 * Component for reviewing songs.
 */
@Component({
  selector: 'app-review-form',
  templateUrl: 'review-form.page.html',
  styleUrls: ['review-form.page.scss'],
})
export class ReviewFormPage {
  songForm: FormGroup; // This is a form group instance which will hold our form

  constructor(private songsService: SongsService, private router: Router, private fb: FormBuilder) {
    this.songForm = this.fb.group({ // Initializing the form group
      title: ['', [Validators.required, Validators.minLength(2)]], // Title field with required and minLength validators
      artist: ['', [Validators.required, Validators.minLength(2)]], // Artist field with required and minLength validators
      review: ['', [Validators.required, Validators.minLength(10)]],  // Review field with required and minLength validators
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]], // Rating field with required, min and max validators
    });
  }
  // Initialize the form with validators
  async addSong() {
    if (this.songForm.valid) {
      const newSong: Song = {
        title: this.songForm.value.title,
        artist: this.songForm.value.artist,
        review: this.songForm.value.review,
        rating: this.songForm.value.rating,
      };

      console.log('Adding song:', newSong);

      await this.songsService.createSong(newSong);
      this.router.navigate(['/song-list']);
    }
  }

  cancel() {
    // Reset the form and any additional logic
    this.songForm.reset();
    // Navigate or perform other actions as needed
  }
}
