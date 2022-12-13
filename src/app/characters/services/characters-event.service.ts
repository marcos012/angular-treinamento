import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersEventService {
  private evento = new Subject<string>()

  // Evento que armazena um cache
  // private evento = new ReplaySubject<string>(1)

  // Evento com um valor inicial obrigatorio
  // private evento = new BehaviorSubject<string>('Rick Sanchez')

  notificar(value: string): void {
    this.evento.next(value)
  }

  escutar(): Observable<string> {
    return this.evento.asObservable()
  }
}
