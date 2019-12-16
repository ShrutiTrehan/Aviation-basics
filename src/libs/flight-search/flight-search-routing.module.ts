import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchLayoutComponent } from './components/flight-search-layout/flight-search-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FlightSearchLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightSearchRoutingModule { }
