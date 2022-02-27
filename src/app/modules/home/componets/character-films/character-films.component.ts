import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/films';
import { Character } from 'src/app/model/people';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'swa-character-films',
    templateUrl: './character-films.component.html',
    styleUrls: ['./character-films.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterFilmsComponent implements OnInit {
    @Input() character: Character;

    @Output() closeWindow = new EventEmitter<void>();

    films$: Observable<Film>[] = [];

    filmImageUrl = [
        'https://m.media-amazon.com/images/I/81Faw0Fs5-L._AC_SL1200_.jpg',
        'https://m.media-amazon.com/images/I/715aZ-gZP1L._AC_SL1200_.jpg',
        'https://m.media-amazon.com/images/I/71MKj4j-isL._AC_SL1200_.jpg',
        'https://m.media-amazon.com/images/I/81w4kfIpSjL._SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71bRcNQXbkL._AC_SL1200_.jpg',
        'https://m.media-amazon.com/images/I/71qof5P0q4L._AC_SL1200_.jpg'
    ];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        const filmsUrl: string[] = this.character.films;
        for (const filmUrl of filmsUrl) {
            this.films$.push(this.apiService.getFilmByUrl(filmUrl));
        }
    }

    close() {
        this.closeWindow.emit();
    }
}
