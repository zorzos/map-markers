import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Column, Location } from 'src/types';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-table-home',
  templateUrl: './table-home.component.html',
  styleUrls: ['./table-home.component.css']
})
export class TableHomeComponent implements OnInit {
  editId: number | null = null;
  locations: Location[] = [];
  initialLocations: Location[] = [];
  isAddLocationModalVisible: boolean = false;
  validateForm!: UntypedFormGroup;
  recordElementHeight: number = 48.571;
  currentPageSize: number = this.calculatePageSize(null);
  searchTerm: string = '';

  columns: Column[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFunction: (a: Location, b: Location) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Position, Latitude',
      sortOrder: null,
      sortFunction: (a: Location, b: Location) => a.coordinates.lat - b.coordinates.lat,
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Position, Longitude',
      sortOrder: null,
      sortFunction: (a: Location, b: Location) => a.coordinates.lng - b.coordinates.lng,
      sortDirections: ['ascend', 'descend', null]
    }
  ]
  
  calculatePageSize(event: any | null) {
    const heightMeasurement = event ? event.currentTarget : window
    return Math.floor(
      (heightMeasurement.innerHeight - 200) / this.recordElementHeight
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.currentPageSize = this.calculatePageSize(event);
  }

  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder,
    private i18n: NzI18nService
  ) {}

  ngOnInit(): void {
    const locationsUrl = '/assets/locations.json'
    this.http.get(locationsUrl).subscribe((response: any) => {
      for (let item of response) {
        const locationItem: Location = {
          name: item.name,
          coordinates: {
            lat: item.coordinates[0],
            lng: item.coordinates[1]
          }
        };
        this.initialLocations.push(locationItem);
        this.locations.push(locationItem);
      }
    })

    this.validateForm = this.fb.group({
      locationName: [null, [Validators.required]],
      locationLatitude: [null, [Validators.required]],
      locationLongitude: [null, [Validators.required]],
    });
  }

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  toggleModal(): void {
    this.validateForm.reset()
    this.isAddLocationModalVisible = !this.isAddLocationModalVisible;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValues = this.validateForm.value;
      console.log('submit', formValues);
      this.locations.push({
        name: formValues.locationName,
        coordinates: {
          lat: formValues.locationLatitude,
          lng: formValues.locationLongitude
        }
      })
      this.isAddLocationModalVisible = false;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  onChangeSearchTerm(value: string) {
    console.log('search term now', value);
    if (value) {
      const filteredLocations = this.locations.filter((loc: Location) => {
        const checkValue = value.toLocaleLowerCase()
        return (
          loc.name.toLocaleLowerCase().includes(checkValue) ||
          loc.coordinates.lat.toString().toLocaleLowerCase().includes(checkValue) ||
          loc.coordinates.lng.toString().toLocaleLowerCase().includes(checkValue)
        )
      })
      this.locations = filteredLocations;
    } else this.locations = this.initialLocations;
  }
}
