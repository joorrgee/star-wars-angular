import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './componets/character/character.component';
import { PeopleComponent } from './componets/people/people.component';
import { HomeComponent } from './home.component';
import { PaginationComponent } from './componets/pagination/pagination.component';

@NgModule({
    declarations: [HomeComponent, PeopleComponent, CharacterComponent, PaginationComponent],
    imports: [CommonModule]
})
export class HomeModule {}
