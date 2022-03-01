import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/model/people';
import { MockService } from 'src/app/services/mock.service';
import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
    let component: CharacterComponent;
    let fixture: ComponentFixture<CharacterComponent>;

    let mockService: MockService;

    beforeEach(async () => {
        mockService = new MockService();
        await TestBed.configureTestingModule({
            declarations: [CharacterComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterComponent);
        component = fixture.componentInstance;



        component.character = mockService.character;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has a class named as character', () => {
        expect(fixture.nativeElement.getElementsByClassName('character').length).toBeGreaterThan(0);
    });

    it('should show the name of the character', () => {
        expect(fixture.nativeElement.getElementsByClassName('character__name')[0].textContent).toEqual(mockService.character.name);
    });
});
