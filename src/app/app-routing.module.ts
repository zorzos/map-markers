import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { 
    path: 'map', 
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule) 
  },
  { 
    path: 'table', 
    loadChildren: () => import('./table/table.module').then((m) => m.TableModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
