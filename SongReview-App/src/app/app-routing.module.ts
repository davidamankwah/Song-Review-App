import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('./pages/authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'song-list',
    loadChildren: () => import('./pages/song-list/song-list.module').then( m => m.SongListPageModule)
  },
  {
    path: 'review-form',
    loadChildren: () => import('./pages/review-form/review-form.module').then( m => m.ReviewFormPageModule)
  },

  {
    path: 'song-review',
    loadComponent: () => import('./song-review/song-review.component').then(m => m.SongReviewComponent)
  },
  {
    path: 'gallary',
    loadChildren: () => import('./pages/gallary/gallary.module').then( m => m.GallaryPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
