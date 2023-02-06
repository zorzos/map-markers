import { Component, ViewChild } from '@angular/core';
import { Location } from 'src/types';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.css']
})
export class MapHomeComponent {
  @ViewChild(MapInfoWindow) mapInfoWindow: MapInfoWindow;
  currentLocationIndex: number = -1;
  locations: Location[] = [];
  infoWindowContent: string = '';
  mapWidth = window.innerWidth;
  mapHeight = window.innerHeight;

  options: google.maps.MapOptions = {
    center: { lat: 35, lng: 33 },
    zoom: 8
  }

  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;

  constructor(private locationService: LocationService) {
    this.locations = this.locationService.getLocations();
  }

  openInfoWindow(locationIndex: number, marker: MapMarker) {
    this.currentLocationIndex = locationIndex;
    this.infoWindowContent = this.locations[locationIndex].name;
    this.mapInfoWindow.open(marker);
  }

  closeInfoWindow() {
    this.currentLocationIndex = -1;
  }

}
