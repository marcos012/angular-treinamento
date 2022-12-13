import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, ReplaySubject, Subject, take, tap } from 'rxjs';
import { Character } from '../models/character.model';

interface charactersResult {
  results: Character[]
};

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public character = Character.fromJson({});

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {

    return this.http.get<charactersResult>('https://rickandmortyapi.com/api/character')
      .pipe(map((value: charactersResult)  => value.results));
  }
  
}
