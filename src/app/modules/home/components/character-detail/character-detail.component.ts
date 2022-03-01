import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/model/people';

@Component({
    selector: 'swa-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailComponent implements OnChanges {
    @Input() character: Character;

    characterDetails: { label: string; detail: string }[] = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.initializeCharacterDetails();
    }

    private initializeCharacterDetails() {
        if (this.character) {
            this.characterDetails = [
                {
                    label: 'Name',
                    detail: this.character.name
                },
                {
                    label: 'Height',
                    detail: this.character.height
                },
                {
                    label: 'Mass',
                    detail: this.character.mass
                },
                {
                    label: 'Hair color',
                    detail: this.character.hair_color
                },
                {
                    label: 'Skin color',
                    detail: this.character.skin_color
                },
                {
                    label: 'Eye color',
                    detail: this.character.eye_color
                },
                {
                    label: 'Birth Year',
                    detail: this.character.birth_year
                },
                {
                    label: 'Gender',
                    detail: this.character.gender
                }
            ];
        } else {
            this.characterDetails = [];
        }
    }
}
