import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements
InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Nice' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Celeritas' },
      { id: 4, name: 'Magneta' },
      { id: 5, name: 'RubberMan' },
      { id: 6, name: 'Dynama' },
      { id: 7, name: 'Dr. IQ' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];
    return {heroes};
  }

  // constructor() { }
  genId(heroes: Hero[]): number {
    return heroes.length > 0? Math.max(...heroes.map(hero => hero.id))+1: 1;
  }
}
