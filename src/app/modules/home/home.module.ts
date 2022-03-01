import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterFilmsComponent } from './components/character-films/character-films.component';
import { CharacterComponent } from './components/character/character.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent, PeopleComponent, CharacterComponent, CharacterDetailComponent, CharacterFilmsComponent],
    imports: [CommonModule, SharedModule]
})
export class HomeModule {}
