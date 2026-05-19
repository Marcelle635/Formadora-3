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
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
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
export class Tab3Page implements OnInit {

  listaProdutos: any[] = [];
  carregando: boolean = false;
  exibirLista: boolean = false; // Controla a exibição/supressão da lista

  constructor() {
    // Registra o ícone de carrinho que aparece no rodapé de cada card
    addIcons({ cartOutline });
  }

  ngOnInit() {
    // Carrega os dados antecipadamente em segundo plano para otimizar o clique
    this.carregarDadosDaAPI();
  }

  carregarDadosDaAPI() {
    fetch('https://fakestoreapi.com/products')
      .then(resposta => resposta.json())
      .then((dados: any[]) => {
        this.listaProdutos = dados;
      })
      .catch(erro => {
        console.error('Erro ao buscar dados na Tab3:', erro);
      });
  }

  /**
   * Executado ao clicar no Botão 1
   */
  mostrarTodos() {
    this.exibirLista = true;
    
    // Fallback caso a requisição inicial do OnInit tenha falhado
    if (this.listaProdutos.length === 0) {
      this.carregando = true;
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((dados: any[]) => {
          this.listaProdutos = dados;
          this.carregando = false;
        })
        .catch(() => this.carregando = false);
    }
  }

  /**
   * Executado ao clicar no novo botão apresentado de supressão
   */
  suprimirLista() {
    this.exibirLista = false;
  }
}