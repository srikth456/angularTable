import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import {ModalOpenDirective} from './modal/modal.directive';
import { AppComponent } from './app.component';
import {DataTableComponent} from './datatable/dataTable.component';
import {SearchPipe, OrderByPipe} from './datatable/datatable.pipes';
import {PagingService} from './pagination/pagination.service';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalOpenDirective,
    DataTableComponent,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ModalService,
    SearchPipe,
    OrderByPipe,
    PagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
