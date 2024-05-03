//arhivo generado en el capitulo 1
import {Component, OnInit} from '@angular/core';
 import {
   NgIf,
   NgFor,
   UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes', // Define el selector HTML para este componente
  templateUrl: './heroes.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./heroes.component.css'], // Especifica los estilos asociados a este componente
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule
  ],
  
})

export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
    */
  //heroes = HEROES;
  selectedHero?: Hero;
  
  heroes: Hero[] = []; // Declara una propiedad 'heroes' como un arreglo de objetos Hero

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  
  constructor(private heroService: HeroService, private messageService: MessageService) { } // Constructor que inyecta el servicio HeroService y MessageService estos están en el capitulo 4

  ngOnInit(): void {
    this.getHeroes(); // Cuando se inicializa el componente, llama a la función 'getHeroes'
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes() // Llama al método 'getHeroes' del servicio 'heroService' capitulo 4
    .subscribe(heroes => this.heroes = heroes); // Suscribe y actualiza la propiedad 'heroes' con la lista de héroes obtenida del servicio capitulo 1
  }
  
}