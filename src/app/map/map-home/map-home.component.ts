import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from 'src/types';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.css']
})
export class MapHomeComponent implements OnInit {
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const locationsUrl = '/assets/locations.json'
    this.http.get(locationsUrl).subscribe((response: any) => {
      for (let item of response) {
        this.locations.push({
          name: item.name,
          coordinates: {
            lat: item.coordinates[0],
            lng: item.coordinates[1]
          }
        })
      }
    })
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
