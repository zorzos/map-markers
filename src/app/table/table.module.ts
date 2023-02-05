import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHomeComponent } from './table-home/table-home.component';
import { TableRoutingModule } from './table-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    TableHomeComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    NzPaginationModule,
    NzDividerModule
  ]
})
export class TableModule { }
