import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan mansion',
      'Amazing place in NYC',
      'https://th.bing.com/th/id/OIP.j1Jkxt2N-ha7_cX1ZYMMXwHaFT?w=258&h=184&c=7&o=5&dpr=1.05&pid=1.7',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour TouJours",
      'Romantic place in Paris',
      'https://th.bing.com/th/id/OIP.PUGB36ymHAs8TbCVGwWiHAHaE8?w=216&h=180&c=7&o=5&dpr=1.05&pid=1.7',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://th.bing.com/th/id/OIP.sgOr8l5M1xkcNrlJ_XhWgwHaFj?w=260&h=195&c=7&o=5&dpr=1.05&pid=1.7',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
