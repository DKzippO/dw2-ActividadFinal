import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts'
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde 'hero.service.ts'

@Component({
  selector: 'app-dashboard', // Define el selector HTML para este componente
  templateUrl: './dashboard.component.html', // Especifica la plantilla HTML asociada a este componente que es el html
  styleUrls: ['./dashboard.component.css'], // Especifica los estilos asociados a este componente
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Declara una propiedad 'heroes' como un arreglo de objetos Hero

  constructor(private heroService: HeroService) {} // Constructor que inyecta el servicio HeroService  que servico esta creado en el capitulo 4

  ngOnInit(): void {
    this.getHeroes(); // Cuando se inicializa el componente, llama a la función 'getHeroes'
  }

  getHeroes(): void {
    this.heroService.getHeroes() // Llama al método 'getHeroes' del servicio 'heroService' que esta en el capitulo 4
        .subscribe((heroes) => this.heroes = heroes.slice(1, 5)); // Suscribe y actualiza la propiedad 'heroes' con una selección de héroes obtenida del servicio
  }
}
