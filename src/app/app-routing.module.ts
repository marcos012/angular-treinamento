import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './characters/components/character-detail/character-detail.component';
import { CharacterFormComponent } from './characters/components/character-form/character-form.component';
import { CharactersListComponent } from './characters/components/characters-list/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent, pathMatch: 'full' },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'new/character', component: CharacterFormComponent, pathMatch: 'full'  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }