import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './Model/auth/login/login.component';
import { SignupComponent } from './Model/auth/signup/signup.component';
import { HomeComponent } from './Model/info/home/home.component';
import { AboutComponent } from './Model/info/about/about.component';
import {AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment.prod';
import { EmailComponent } from './Model/auth/email/email.component';
import { MembersComponent } from './Model/auth/members/members.component';

import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    EmailComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.Firebaseconfig),
    AngularFireAuthModule,
    AngularFireAuth,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
