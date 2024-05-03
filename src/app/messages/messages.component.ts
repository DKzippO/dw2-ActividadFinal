//este arhivo pertenece al capitulo 4
import { Component } from '@angular/core'; // Importa Component desde Angular Core
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages', // Define el selector HTML para este componente
  templateUrl: './messages.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./messages.component.css'] // Especifica los estilos asociados a este componente
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}