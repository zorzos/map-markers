import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapHomeComponent } from './map-home/map-home.component';

const routes: Routes = [
  { path: '', component: MapHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
