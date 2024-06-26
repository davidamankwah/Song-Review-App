import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IonModal, IonRouterOutlet} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;
  presentingElement: HTMLIonRouterOutletElement;
 

  constructor(
    private authService: AuthService, // Injecting AuthService to handle authentication related tasks
    private router: Router, // Injecting Router service for navigation

    private routerOutlet: IonRouterOutlet,
   
  ) {
    this.presentingElement = routerOutlet.nativeEl;
   
  }

  async logout() {
    await this.authService.logout(); // Calling the logout method of AuthService
    this.router.navigateByUrl('/authentication', { replaceUrl: true }); // Navigating to the authentication page after logout
  }

  // Navigates to the review form when this method is called
  navigateToReviewForm() {
    this.router.navigateByUrl('/review-form');
  }

  // Navigates to the song list when this method is called
  navigateToSongList() {
    this.router.navigateByUrl('/song-list');
  }
 
}
