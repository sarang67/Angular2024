import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <section class="container">
      <h1>Saved Cars {{ savedCarList.length }}</h1>
      @for (car of carList; track $index) {
      <app-listing [car]="car" (carSaved)="addCarToSaved($event)"></app-listing>
      }
    </section>
    <article>
      @for (sCar of savedCarList; track $index) {
      <p>{{ sCar.make }} {{ sCar.model }}</p>
      }
    </article>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(event: Car) {
    this.savedCarList = [...this.savedCarList, event];
  }
}
