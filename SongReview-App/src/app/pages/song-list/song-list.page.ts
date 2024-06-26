import { Component } from '@angular/core';
import { SongsService, Song } from '../../services/song.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-song-list',
  templateUrl: 'song-list.page.html',
  styleUrls: ['song-list.page.scss'],
})
export class SongListPage {
  songs = this.songsService.readSongs();

  constructor(
    private songsService: SongsService,
    private alertController: AlertController
  ) {}

  deleteSong(song: Song) {
    console.log('Deleting song:', song);
    this.songsService.deleteSong(song);
  }

  async openUpdateInput(song: Song) {
    const alert = await this.alertController.create({
      header: 'Update Song',
      inputs: [
        { name: 'Title', type: 'text', placeholder: 'Song title', value: song.title },
        { name: 'Artist', type: 'text', placeholder: 'Artist name', value: song.artist },
        { name: 'Review', type: 'text', placeholder: 'Your review', value: song.review },
        { name: 'Rating', type: 'number', placeholder: 'Star rating', value: song.rating },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Update',
          handler: (data) => {
            song.title = data.Title; // Updating the title of the song
            song.artist = data.Artist; // Updating the artist of the song
            song.review = data.Review; // Updating the review of the song
            song.rating = data.Rating; // Updating the rating of the song
            this.songsService.updateSong(song); // Calling the updateSong method of songsService to update the song
          },
        },
      ],
    });
    await alert.present(); // Presenting the alert to the user
    setTimeout(() => {
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus(); // Focusing on the first input field
    }, 250);
  }
}
