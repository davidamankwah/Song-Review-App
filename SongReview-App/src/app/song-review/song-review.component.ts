import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-song-review',
  templateUrl: './song-review.component.html',
  styleUrls: ['./song-review.component.scss'],
  standalone:true, // This component is standalone and does not depend on any other component
  imports: [IonicModule, RouterModule]
})
export class SongReviewComponent  implements OnInit {

  constructor( private router: Router,) { } // Injecting Router service in the constructor for navigation

  ngOnInit() {}


  // Navigates to the review form when this method is called
  navigateToReviewForm() {
    this.router.navigateByUrl('/review-form');
  }
  
  // Navigates to the gallery when this method is called
  navigateToGallary() {
    this.router.navigateByUrl('/gallary');
  }

}
