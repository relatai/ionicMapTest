import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abreMapa(){
    this.navCtrl.push(MapaPage);
  }

  //android - AIzaSyBthoRPsHLPuc6aq_mUQte4LWdAGTcfXiA   ios - AIzaSyB2lV8u-q2GemhrE09uYIw1nQ0OBfXsAzE
  //ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyBthoRPsHLPuc6aq_mUQte4LWdAGTcfXiA" --variable API_KEY_FOR_IOS="AIzaSyB2lV8u-q2GemhrE09uYIw1nQ0OBfXsAzE"

}
