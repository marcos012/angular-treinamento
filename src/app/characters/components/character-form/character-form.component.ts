import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent {

  private formBuilder = new FormBuilder();

  public characterForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(1)]],
  })

  submit(): void {
    if (!this.characterForm.valid) {
      console.log('Formulario invalido', this.characterForm);
      return;
    }

    console.log('SUCESSO', this.characterForm.value);
  }
}
