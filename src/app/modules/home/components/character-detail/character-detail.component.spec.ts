import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockService } from 'src/app/services/mock.service';
import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
    let component: CharacterDetailComponent;
    let fixture: ComponentFixture<CharacterDetailComponent>;

    let mockService: MockService;

    beforeEach(async () => {
        mockService = new MockService();
        await TestBed.configureTestingModule({
            declarations: [CharacterDetailComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CharacterDetailComponent);
        component = fixture.componentInstance;
        component.character = mockService.character;
        component.ngOnChanges(null);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should has a class named as character-detail', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail').length).toBeGreaterThan(0);
    });
    it('should fill correctly the character name', () => {
        expect(component.characterDetails[0].detail).toEqual(component.character.name);
    });
    it('should display the name', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[0].innerText).toEqual(component.character.name);
    });
    it('should fill correctly the character height', () => {
        expect(component.characterDetails[1].detail).toEqual(component.character.height);
    });
    it('should display the height', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[1].innerText).toEqual(component.character.height);
    });
    it('should fill correctly the character mass', () => {
        expect(component.characterDetails[2].detail).toEqual(component.character.mass);
    });
    it('should display the mass', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[2].innerText).toEqual(component.character.mass);
    });
    it('should fill correctly the character hair color', () => {
        expect(component.characterDetails[3].detail).toEqual(component.character.hair_color);
    });
    it('should display the hair color', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[3].innerText).toEqual(
            component.character.hair_color
        );
    });
    it('should fill correctly the character skin color', () => {
        expect(component.characterDetails[4].detail).toEqual(component.character.skin_color);
    });
    it('should display the skin color', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[4].innerText).toEqual(
            component.character.skin_color
        );
    });
    it('should fill correctly the character eye color', () => {
        expect(component.characterDetails[5].detail).toEqual(component.character.eye_color);
    });
    it('should display the eye color', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[5].innerText).toEqual(
            component.character.eye_color
        );
    });
    it('should fill correctly the character birth year', () => {
        expect(component.characterDetails[6].detail).toEqual(component.character.birth_year);
    });
    it('should display the birth year', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[6].innerText).toEqual(
            component.character.birth_year
        );
    });
    it('should fill correctly the character gender', () => {
        expect(component.characterDetails[7].detail).toEqual(component.character.gender);
    });
    it('should display the gender', () => {
        expect(fixture.nativeElement.getElementsByClassName('character-detail__detail')[7].innerText).toEqual(component.character.gender);
    });
});
