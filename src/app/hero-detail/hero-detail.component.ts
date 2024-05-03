//este archivo se realiza en el capitulo 3 del tutorial de heroes de angular de su documentacion 
//import { Component } from '@angular/core';

import {Component, OnInit} from '@angular/core'; // Importa los módulos necesarios desde Angular Core
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts' que es el capitulo 1
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde 'hero.service.ts'en el capitulo 4
import { ActivatedRoute } from '@angular/router'; // Importa el módulo ActivatedRoute para acceder a los parámetros de la URL
import { Location } from '@angular/common'; // Importa el módulo Location para navegar hacia atrás en la historia del navegador

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute, // Inyecta el servicio ActivatedRoute para obtener información de la URL
    private heroService: HeroService, // Inyecta el servicio HeroService llama a este servico creado en el capitulo 4
    private location: Location, // Inyecta el servicio Location para navegar hacia atrás
  ) {}

  ngOnInit(): void {
    this.getHero(); // Cuando se inicializa el componente, llama a la función 'getHero'
  }

  getHero(): void {
    // Obtiene el parámetro 'id' de la URL y convierte su valor a un número
    // TODO: fix the error ceased by ts-ignore
    // @ts-ignore
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id) // Llama al método 'getHero' del servicio 'heroService' para obtener un héroe por su ID que esta en el capitulo 3
      .subscribe(hero => this.hero = hero); // Suscribe y actualiza la propiedad 'hero' con el héroe obtenido
  }

  goBack(): void {
    this.location.back();
  }
}