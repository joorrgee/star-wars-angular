import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
    selector: 'swa-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnDestroy {
    constructor(private paginationService: PaginationService, private changeDetector: ChangeDetectorRef) {}

    isFirstPage = true;
    isLastPage = false;

    subscriptions = new Subscription();

    ngOnInit(): void {
        this.subscriptions.add(this.subscribeToIsFirstPageSubject());
        this.subscriptions.add(this.subscribeToIsLastPageSubject());
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    previousPage() {
        this.paginationService.previousPage();
    }

    nextPage() {
        this.paginationService.nextPage();
    }

    private subscribeToIsFirstPageSubject(): Subscription {
        return this.paginationService.isFirstPageSubject.subscribe((isFirstPage: boolean) => {
            this.isFirstPage = isFirstPage;
            this.changeDetector.markForCheck();
        });
    }
    private subscribeToIsLastPageSubject(): Subscription {
        return this.paginationService.isLastPageSubject.subscribe((isLastPage: boolean) => {
            this.isLastPage = isLastPage;
            this.changeDetector.markForCheck();
        });
    }
}
