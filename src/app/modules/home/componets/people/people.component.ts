import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { People } from 'src/app/model/people';
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

    loading = true;

    currentPage: number;

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
                this.loading = false;
                this.paginationService.checkPaginationStatus(people.previous, people.next);
                this.changeDetector.markForCheck();
            });
        });
    }
}
