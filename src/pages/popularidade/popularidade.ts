import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 *
 *  Benjamim de Lira S. Melo RA: 816112054
 *
 *
 */

@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
})
export class PopularidadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularidadePage');
  }

}
