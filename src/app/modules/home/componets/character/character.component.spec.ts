import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/model/people';
import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
    let component: CharacterComponent;
    let fixture: ComponentFixture<CharacterComponent>;

    const mockCharacter: Character = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/6/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/7/'
        ],
        species: ['https://swapi.dev/api/species/1/'],
        vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
        starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/'
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CharacterComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterComponent);
        component = fixture.componentInstance;
        component.character = mockCharacter;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
