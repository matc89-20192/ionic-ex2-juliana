import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  public nome: string = "";
  callback: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = navParams.get('nome');
    this.callback = navParams.get('callback');
  }

retornaPagina1(){
  this.callback(this.nome);
  this.navCtrl.pop();
}

Cancela(){
  this.navCtrl.pop();
}
}