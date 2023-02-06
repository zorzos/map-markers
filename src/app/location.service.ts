import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations: Location[] = [];

  constructor(private http: HttpClient) {
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

  getLocations() {
    return this.locations;
  }
}
