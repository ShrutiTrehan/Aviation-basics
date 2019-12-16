import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightSearchFormComponent } from './components/flight-search-form/flight-search-form.component';
import { FlightSearchLayoutComponent } from './components/flight-search-layout/flight-search-layout.component';
import { FlightSearchRoutingModule } from './flight-search-routing.module';
import { FlightSearchUtilService } from './utils/flight-search-util.service';


@NgModule({
  declarations: [FlightSearchFormComponent, FlightSearchLayoutComponent, FlightListComponent],
  imports: [
    CommonModule,
    FlightSearchRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [FlightSearchUtilService]
})
export class FlightSearchModule { }
