import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableHomeComponent } from './table-home/table-home.component';

const routes: Routes = [
  { path: '', component: TableHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
