import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockService } from 'src/app/services/mock.service';
import { CharacterFilmsComponent } from './character-films.component';

describe('CharacterFilmsComponent', () => {
    let component: CharacterFilmsComponent;
    let fixture: ComponentFixture<CharacterFilmsComponent>;

    let mockService: MockService;

    beforeEach(async () => {
        mockService = new MockService();
        await TestBed.configureTestingModule({
            declarations: [CharacterFilmsComponent],
            imports: [HttpClientModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterFilmsComponent);
        component = fixture.componentInstance;
        component.character = mockService.character;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has a class named as character-films', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-films').length).toBeGreaterThan(0);
    });
});
