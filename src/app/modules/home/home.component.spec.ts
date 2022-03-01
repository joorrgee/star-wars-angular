import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent, PaginationComponent, MockPeopleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has a class named as home', () => {
        expect(fixture.nativeElement.getElementsByClassName('home').length).toBeGreaterThan(0);
    });

    it('should has a title', () => {
        expect(fixture.nativeElement.getElementsByClassName('home__title').length).toBeGreaterThan(0);
    });
});
@Component({
    selector: 'swa-people',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
class MockPeopleComponent {}
