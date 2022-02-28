import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
    let component: PeopleComponent;
    let fixture: ComponentFixture<PeopleComponent>;

    beforeEach(async () => {
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
});
