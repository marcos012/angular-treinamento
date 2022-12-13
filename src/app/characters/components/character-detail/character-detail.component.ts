import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(private charactersService: CharactersService) { }
  
  ngOnInit(): void {
    this.character = this.charactersService.character;
  }
}
