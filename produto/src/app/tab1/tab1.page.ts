import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonIcon, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';

// Importações necessárias para os ícones funcionarem no modelo Standalone
import { addIcons } from 'ionicons';
import { 
  schoolOutline, 
  peopleOutline, 
  locationOutline, 
  keyOutline, 
  checkmarkOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonIcon, 
    IonInput, 
    IonButton
  ]
})
export class Tab1Page {

  // Variáveis para gerenciar o estado do campo de palavra-chave
  tempPalavra: string = '';
  palavraFixada: boolean = false;

  constructor() {
    // Registra os ícones vinculando o nome do HTML ao arquivo importado
    addIcons({ 
      'school-outline': schoolOutline, 
      'people-outline': peopleOutline, 
      'location-outline': locationOutline, 
      'key-outline': keyOutline, 
      'checkmark-outline': checkmarkOutline 
    });
  }

  /**
   * Fixa a palavra-chave e altera o estado da tela
   */
  fixarPalavra() {
    if (this.tempPalavra && this.tempPalavra.trim().length > 0) {
      console.log('Palavra confirmada:', this.tempPalavra);
      this.palavraFixada = true;
    } else {
      console.warn('Campo vazio. Digite uma palavra antes de confirmar.');
    }
  }

}