import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHomeComponent } from './map-home/map-home.component';
import { MapRoutingModule } from './map-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    MapHomeComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MapRoutingModule,
    
    NzGridModule
  ]
})
export class MapModule { }
