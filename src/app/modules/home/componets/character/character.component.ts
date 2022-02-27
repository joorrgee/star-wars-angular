import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/model/people';

@Component({
    selector: 'swa-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
    @Input() character: Character;

    constructor() {}

    ngOnInit(): void {}
}
