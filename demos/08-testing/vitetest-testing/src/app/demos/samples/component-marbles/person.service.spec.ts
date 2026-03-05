import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { PersonService } from './person.service';

describe('PersonService', () => {
    let service: PersonService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PersonService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return persons in sequence', () => {
        const expectedPersons = ['Cleo', 'Giro', 'Soi', 'Flora'];
        const persons$ = service.getPersons();
        const receivedPersons: string[] = [];

        return new Promise<void>((resolve) => {
            persons$.subscribe({
                next: (person) => {
                    receivedPersons.push(person);
                },
                complete: () => {
                    expect(receivedPersons).toEqual(expectedPersons);
                    resolve();
                }
            });
        });
    });
});