import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {
    isFirstPage = true;
    isLastPage = false;

    page = 1;

    currentPageSubject: BehaviorSubject<number> = new BehaviorSubject(this.page);
    isFirstPageSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isFirstPage);
    isLastPageSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.isLastPage);

    previousPage() {
        if (!this.isFirstPage) {
            this.page--;
            this.currentPageSubject.next(this.page);
        }
    }

    nextPage() {
        if (!this.isLastPage) {
            this.page++;
            this.currentPageSubject.next(this.page);
        }
    }

    checkPaginationStatus(previousPage: string, nextPage: string) {
        if (!previousPage) {
            this.setIsFirstPage(true);
        }
        if (!nextPage) {
            this.setIsLastPage(true);
        }
        if (previousPage && nextPage) {
            if (this.isFirstPage) {
                this.setIsFirstPage(false);
            } else if (this.isLastPage) {
                this.setIsLastPage(false);
            }
        }
    }

    private setIsFirstPage(isFirstPage: boolean) {
        this.isFirstPage = isFirstPage;
        this.isFirstPageSubject.next(this.isFirstPage);
    }

    private setIsLastPage(isLastPage: boolean) {
        this.isLastPage = isLastPage;
        this.isLastPageSubject.next(this.isLastPage);
    }
}
