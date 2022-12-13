import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharactersEventService } from 'src/app/characters/services/characters-event.service';
import { CharactersService } from 'src/app/characters/services/characters.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() cardClick = new EventEmitter<string>();

  constructor(private charactersEvent: CharactersEventService) { }

  ngOnInit(): void {
    this.charactersEvent.escutar().subscribe(value => {
      console.log('Nome: ', value);
    });
  }

  onCardClick() {
    this.cardClick.emit(this.title)
  }

}
