import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFilmsComponent } from './character-films.component';

describe('CharacterFilmsComponent', () => {
  let component: CharacterFilmsComponent;
  let fixture: ComponentFixture<CharacterFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
