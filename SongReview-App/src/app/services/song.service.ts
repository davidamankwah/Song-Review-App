import { Injectable, OnDestroy } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  Firestore,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



export interface Song {
  id?: string;
  title: string;
  artist: string;
  review: string;
  user?: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root',
})
export class SongsService implements OnDestroy  {
  private collectionRef: CollectionReference;
  private songs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);
  private songsSub!: Subscription;
  
  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.collectionRef = collection(this.firestore, 'songs');

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const songsQuery = query(
          this.collectionRef,
          where('user', '==', user.uid)
        );

        const collectionSub = collectionData(songsQuery, {
          idField: 'id',
        }) as Observable<Song[]>;

        this.songsSub = collectionSub.subscribe((songs) => {
          this.songs.next(songs);
        });
      } else {
        this.songs.next([]);
        this.songsSub.unsubscribe();
      }
    });
  }
  ngOnDestroy() {
    // Ensure songsSub is defined before calling unsubscribe
    if (this.songsSub) {
      this.songsSub.unsubscribe();
    }
  }
  async createSong(song: Song) {
     addDoc(this.collectionRef, { ...song, user: this.auth.currentUser?.uid, rating: song.rating || 0 });
  }

  readSongs() {
    return this.songs.asObservable();
  }

  updateSong(song: Song) {
    // Use the task id to get the reference to the document
    const ref = doc(this.firestore, `songs/${song.id}`);
    // Update the document. Here we set the value of the content field to the value of the task.content
    return updateDoc(ref, { title: song.title, artist: song.artist, review: song.review, rating: song.rating || 0 });
  }

  async deleteSong(song: Song) {
    try {
      const ref = doc(this.firestore, `songs/${song.id}`);
      await deleteDoc(ref);
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  }
}
