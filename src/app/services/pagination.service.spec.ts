import { TestBed } from '@angular/core/testing';
import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
    let service: PaginationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PaginationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should not decrease page after call previousPage function on initial page', () => {
        const initialPage = service.page;
        service.previousPage();
        expect(service.page).toEqual(initialPage);
    });

    it('should decrease page after call previousPage function', () => {
        const initialPage = 2;
        service.page = initialPage;
        service.isFirstPage = false;
        service.previousPage();
        expect(service.page).toBeLessThan(initialPage);
    });

    it('should increase page after call nextPage function', () => {
        const initialPage = 2;
        service.page = initialPage;
        service.nextPage();
        expect(service.page).toBeGreaterThan(initialPage);
    });

    it('should be first page if calling checkPaginationStatus with previousPage parameter as null', () => {
        service.checkPaginationStatus(null, null);
        expect(service.isFirstPage && service.isLastPage).toBeTrue();
    });
});
