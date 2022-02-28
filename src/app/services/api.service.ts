import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, Films } from '../model/films';
import { Character, People } from '../model/people';
import { Planet, Planets } from '../model/planets';
import { Specie, Species } from '../model/species';
import { Starship, Starships } from '../model/starships';
import { Vehicle, Vehicles } from '../model/vehicles';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseApiUrl = environment.baseApiUrl;

    constructor(private http: HttpClient) {}

    // FILMS
    public getFilms(): Observable<Films> {
        return this.http.get<Films>(`${this.baseApiUrl}film/`);
    }

    public getFilm(id: number): Observable<Film> {
        return this.http.get<Film>(`${this.baseApiUrl}films/${id}/`);
    }

    public getFilmByUrl(url: string): Observable<Film> {
        return this.http.get<Film>(url);
    }

    // PEOPLE
    public getAllPeople(page = 1): Observable<People> {
        return this.http.get<People>(`${this.baseApiUrl}people/?page=${page}`);
    }

    public getPeople(id: number): Observable<Character> {
        return this.http.get<Character>(`${this.baseApiUrl}people/${id}/`);
    }

    // PLANETS
    public getPlanets(): Observable<Planets> {
        return this.http.get<Planets>(`${this.baseApiUrl}planets/`);
    }

    public getPlanet(id: number): Observable<Planet> {
        return this.http.get<Planet>(`${this.baseApiUrl}planet/${id}/`);
    }

    // SPECIES
    public getSpecies(): Observable<Species> {
        return this.http.get<Species>(`${this.baseApiUrl}species/`);
    }

    public getSpecie(id: number): Observable<Specie> {
        return this.http.get<Specie>(`${this.baseApiUrl}species/${id}/`);
    }

    // STARTSHIPS
    public getStarships(): Observable<Starships> {
        return this.http.get<Starships>(`${this.baseApiUrl}starships/`);
    }

    public getStarship(id: number): Observable<Starship> {
        return this.http.get<Starship>(`${this.baseApiUrl}starships/${id}/`);
    }

    // VEHICLES
    public getVehicles(): Observable<Vehicles> {
        return this.http.get<Vehicles>(`${this.baseApiUrl}vehicles/`);
    }

    public geVehicle(id: number): Observable<Vehicle> {
        return this.http.get<Vehicle>(`${this.baseApiUrl}vehicles/${id}/`);
    }
}
