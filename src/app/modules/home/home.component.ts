import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { People } from 'src/app/model/people';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
