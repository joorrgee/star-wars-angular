import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockService } from 'src/app/services/mock.service';
import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
    let component: PeopleComponent;
    let fixture: ComponentFixture<PeopleComponent>;

    let mockService: MockService;

    beforeEach(async () => {
        mockService = new MockService();
        await TestBed.configureTestingModule({
            declarations: [PeopleComponent],
            imports: [HttpClientModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has a class named as people', () => {
        expect(fixture.nativeElement.getElementsByClassName('people').length).toBeGreaterThan(0);
    });

    it('should inform the characterToSeeTheFilms after call openCharacterFilms function', () => {
        component.openCharacterFilms(mockService.character);
        expect(component.characterToSeeTheFilms).toEqual(mockService.character);
    });
    it('should clear the characterToSeeTheFilms after call closeCharacterFilmsWindow function', () => {
        component.closeCharacterFilmsWindow();
        expect(component.characterToSeeTheFilms).toEqual(null);
    });
});
