import { Injectable } from '@angular/core';

import { HEROES } from './mock-heros';
import { Hero } from './heroes/hero';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { MesssageService } from './messsage.service';

@Injectable()
export class HeroService {


  constructor(private messageService: MesssageService ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched heroes');
    return of(HEROES);
  }

}
