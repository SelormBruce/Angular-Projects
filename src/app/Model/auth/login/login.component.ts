import { Component, OnInit,HostBinding} from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
//import {moveIn} from '../router.animations';
import * as firebase from 'firebase';
import { error } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //animations: [moveIn()],
  //host:{'@moveIn':''}
})
export class LoginComponent implements OnInit {
Error:any;

  constructor( private af:AngularFireAuth, private router:Router) 
  {
 this.af.auth.onAuthStateChanged(auth =>{
   if(auth){
     this.router.navigate(['/members']);
   }
 });
   }
   LoginWithFaceBook(){
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(suceess=>{this.router.navigate(['/members']);})
    .catch((error)=>{this.Error= error});
   }
   LoginWithGoogle(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then(suceess=>{this.router.navigate(['/members']);})
    .catch((error)=>{this.Error= error});
   }
  ngOnInit() {
  }

}
