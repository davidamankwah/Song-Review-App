import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Add this line
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, provideFirebaseApp(() => initializeApp({"projectId":"fireappconnects","appId":"1:480251124758:web:5cd9dd06d0c33dabb42937","storageBucket":"fireappconnects.appspot.com","apiKey":"AIzaSyBIgkPonpRtQY8p0anZpufhs2XoUqsR-d0","authDomain":"fireappconnects.firebaseapp.com","messagingSenderId":"480251124758"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
