import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 
 *  Benjamim de Lira S. Melo RA: 816112054
 *
 */
 */

@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
})
export class FilmePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmePage');
  }

}
