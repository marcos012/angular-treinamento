import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character.model';
import { CharactersEventService } from '../../services/characters-event.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  isLoading = false

  constructor(
      private charactersService: CharactersService,
      public charactersEventService: CharactersEventService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.charactersService.getAllCharacters()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(data => {
        this.characters = data
      });
  }

  onNavigateToDatail(character: Character): void {
    this.charactersService.character = character;
    // this.router.navigate([`/character`, character.id])
  }

  onNavigateToNew(): void {
    this.router.navigate([`/new/character`])
  }

  cardClick(cardTitle: string) {
    this.charactersEventService.notificar(cardTitle);
  }
}
