import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [PaginationComponent, LoadingComponent],
    imports: [CommonModule],
    exports: [PaginationComponent, LoadingComponent]
})
export class SharedModule {}
