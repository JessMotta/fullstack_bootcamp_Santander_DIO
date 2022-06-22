import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
      let peopleArray = [
        {
          firstName: 'John',
          lastName: 'Smith',
          age: 36,
        },
        {
          firstName: 'Mary',
          lastName: 'Doe',
          age: 24,
        },
        {
          firstName: 'Louis',
          lastName: 'Jolie',
          age: 15,
        }
      ]

      return of(peopleArray)
  }
}
