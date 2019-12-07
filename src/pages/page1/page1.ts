import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public nome: string = "Oi, Fulano";  
  
  constructor(public navCtrl: NavController) {

  }

  trocaUsuario() {
    this.navCtrl.push('Page2', {'callback': this.receberDados.bind(this) });
  }

  receberDados(novoNome: string){
    if (typeof (novoNome) === "undefined") //2 horas da vida
      this.nome = "Oi";
    else
      this.nome = "Oi, " + novoNome;
  }
  }
