import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character, People } from 'src/app/model/people';
import { ApiService } from 'src/app/services/api.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
    selector: 'swa-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit, OnDestroy {
    people: People;

    currentPage: number;

    characterLoaded: Character;
    characterToSeeTheFilms: Character;

    loadCharacterDetailTimeout: any;

    subscriptions = new Subscription();

    constructor(private apiService: ApiService, private changeDetector: ChangeDetectorRef, private paginationService: PaginationService) {}

    ngOnInit(): void {
        this.subscriptions.add(this.subscribeToCurrentPageSubject());
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    subscribeToCurrentPageSubject(): Subscription {
        return this.paginationService.currentPageSubject.subscribe((currentPage: number) => {
            this.apiService.getAllPeople(currentPage).subscribe((people: People) => {
                this.people = people;
                this.paginationService.checkPaginationStatus(people.previous, people.next);
                this.characterLoaded = this.people.results[0];
                this.changeDetector.markForCheck();
            });
        });
    }

    loadCharacterDetail(character: Character) {
        this.loadCharacterDetailTimeout = setTimeout(() => {
            this.characterLoaded = character;
            this.changeDetector.detectChanges();
        }, 200);
    }

    openCharacterFilms(character: Character) {
        this.characterToSeeTheFilms = character;
        this.changeDetector.markForCheck();
    }

    closeCharacterFilmsWindow() {
        this.characterToSeeTheFilms = null;
        this.changeDetector.markForCheck();
    }
}
