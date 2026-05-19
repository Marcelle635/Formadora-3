import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton, 
  IonIcon, 
  IonSpinner 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonButton, 
    IonIcon, 
    IonSpinner
  ]
})
export class Tab2Page implements OnInit {

  listaProdutos: any[] = [];
  produtoAtual: any = null;
  indexAtual: number = 0;
  carregando: boolean = true;

  constructor() {
    // Registro das novas setas
    addIcons({ arrowBackOutline, arrowForwardOutline });
  }

  ngOnInit() {
    this.buscarProdutosDaAPI();
  }

  buscarProdutosDaAPI() {
    this.carregando = true;
    fetch('https://fakestoreapi.com/products')
      .then(resposta => resposta.json())
      .then((dados: any[]) => {
        this.listaProdutos = dados;
        if (this.listaProdutos.length > 0) {
          this.indexAtual = 0;
          this.produtoAtual = this.listaProdutos[this.indexAtual];
        }
        this.carregando = false;
      })
      .catch(erro => {
        console.error('Erro na API:', erro);
        this.carregando = false;
      });
  }

  proximoProduto() {
    if (this.indexAtual < this.listaProdutos.length - 1) {
      this.indexAtual++;
      this.produtoAtual = this.listaProdutos[this.indexAtual];
    }
  }

  produtoAnterior() {
    if (this.indexAtual > 0) {
      this.indexAtual--;
      this.produtoAtual = this.listaProdutos[this.indexAtual];
    }
  }
}