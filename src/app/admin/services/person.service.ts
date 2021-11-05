import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),  
  new Person(3, 'Kishna', 'Mathura')
];
let personList$ = of(PERSONS);

@Injectable()
export class PersonService { 
	getPersons(): Observable<Person[]> {
	    return personList$;
	}
}