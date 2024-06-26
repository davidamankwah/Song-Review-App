import { Component } from '@angular/core';
import { PhotosService, UserPhoto } from 'src/app/services/photos.service'; // Importing PhotosService and UserPhoto from our custom photos service

@Component({ 
  selector: 'app-gallary',
  templateUrl: './gallary.page.html',
  styleUrls: ['./gallary.page.scss'],
})
export class GallaryPage { // Exporting this class so it can be used in other parts of our application

  constructor(public photoService: PhotosService) { } // Injecting PhotosService into this component

  addPhotoToGallery() {
    this.photoService.addNewToGallery(); // Calling the addNewToGallery method of PhotosService when this method is called
  }

}
