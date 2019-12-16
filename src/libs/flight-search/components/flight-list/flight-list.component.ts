import { Component, Input } from '@angular/core';
import { FLIGHT_LIST_CONSTANTS } from '../../constants/flight-search.constants';
import { FlightResponse } from '../../models/search-flight-response.payload';

/**
 *component to list flights
 *
 * @export
 * @class FlightListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {
  /**
   *constants for flight list
   *
   * @memberof FlightListComponent
   */
  FLIGHT_LIST_CONSTANTS = FLIGHT_LIST_CONSTANTS;

  /**
   *input of list received from layout
   *
   * @type {FlightResponse}
   * @memberof FlightListComponent
   */
  @Input() flight: FlightResponse;
  /**
   *Creates an instance of FlightListComponent.
   * @memberof FlightListComponent
   */
  constructor() { }
}
