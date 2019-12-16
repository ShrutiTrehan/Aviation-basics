import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FLIGHT_SEARCH_FORM_CONSTANTS } from '../../constants/flight-search.constants';
import { SearchFlightRequest } from '../../models/search-flight-request.payload';
import { FlightSearchUtilService } from '../../utils/flight-search-util.service';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {
  FLIGHT_SEARCH_FORM_CONSTANTS = FLIGHT_SEARCH_FORM_CONSTANTS;
  flightSearchFormGroup: FormGroup;

  @Input() departureOptions: string[];
  @Input() arrivalOptions: string[];
  @Output() searchFlightsEvent = new EventEmitter<SearchFlightRequest>();

  constructor(private flightSearchUtil: FlightSearchUtilService) { }

  ngOnInit() {
    this.flightSearchFormGroup = new FormGroup({
      departure: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required]),
      doj: new FormControl('', [Validators.required]),
      dor: new FormControl(''),
      travellers: new FormControl('', [Validators.required])
    })
  }

  /**
   *event handler for click of search button
   *
   * @memberof FlightSearchFormComponent
   */
  searchFlights() {
    // if(this.flightSearchFormGroup.valid) {
    this.searchFlightsEvent.emit(this.flightSearchFormGroup.value);
    // }
  }

  /**
   *return min date for date of journey
   *
   * @memberof FlightSearchFormComponent
   */
  minDojDate(): Date {
    return new Date();
  }

  /**
   *return min date for date of return
   *
   * @memberof FlightSearchFormComponent
   */
  minDorDate(): Date {
    return this.flightSearchFormGroup.value.doj ? this.flightSearchFormGroup.value.doj : new Date();
  }

  /**
   *click handler for reset button click
   *
   * @memberof FlightSearchFormComponent
   */
  resetForm(): void {
    this.flightSearchUtil.setFlightListSubject({
      departureFlight: [],
      returnFlight: []
    })
  }
}
