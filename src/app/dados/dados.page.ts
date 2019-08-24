import { Component, OnInit } from '@angular/core';
import { IonGrid } from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private pessoa;

  constructor() { 

    this.pessoa = {
      nome: "Igor Fastroni",
      idade: 24,
      email: "igor.fastroni@gmail.com",
      telefone: "(16) 999999999"
    }


  }

  ngOnInit() {
  }

}
