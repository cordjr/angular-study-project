import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero  = {
    id: 1,
    name: 'Windstorm'
  };
  heros: Hero[];

  selectedHero: Hero;
  constructor(private heroService: HeroService ) {

  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heros = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
