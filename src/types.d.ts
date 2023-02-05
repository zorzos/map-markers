import { NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";

export interface Location {
    name: string;
    coordinates: google.maps.LatLngLiteral;
}

export interface Column {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFunction: NzTableSortFn<Location> | null;
    sortDirections: NzTableSortOrder[];
}

export interface LanguageOption {
    label: string;
    package: string; 
}