import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_ENDPOINTS } from 'src/libs/core/constants/api-endpoint.constants';
import { RequestService } from 'src/libs/core/utils/request.service';
import { ArrivalDepartureOptions } from '../models/arrival-departure-options.payload';
import { SearchFlightRequest } from '../models/search-flight-request.payload';
import { SearchFlightResponse } from '../models/search-flight-response.payload';


@Injectable({
  providedIn: 'root'
})
export class FlightSearchUtilService {
  API_ENDPOINTS = API_ENDPOINTS;
  departureArrivalSubject = new BehaviorSubject<ArrivalDepartureOptions>({
    departure: [],
    arrival: []
  });
  flightListSubject = new BehaviorSubject<SearchFlightResponse>({ departureFlight: [], returnFlight: [] });

  constructor(private requestService: RequestService) { }

  /**
   *http call to fetch the options to be populated in arrival and departure dropdowns
   *
   * @memberof FlightSearchUtilService
   */
  getArrivalAndDeparture(): Observable<ArrivalDepartureOptions> {
    return this.requestService.get(API_ENDPOINTS.flightSearch).pipe(map(res => res.arrivalDepartureOptions));
  }

  /**
   *http call to fetch list of flights based on payload
   *
   * @param {SearchFlightRequest} payload
   * @returns {Observable<SearchFlightResponse[]>}
   * @memberof FlightSearchUtilService
   */
  getFlightList(payload: SearchFlightRequest): Observable<SearchFlightResponse> {
    return this.requestService.get(API_ENDPOINTS.flightSearch).pipe(map(res => res.flightList));
  }

  /**
   *get the state for departure and arrival options
   *
   * @returns {Subject<ArrivalDepartureOptions>}
   * @memberof FlightSearchUtilService
   */
  getDepartureArrivalOptions(): Subject<ArrivalDepartureOptions> {
    return this.departureArrivalSubject;
  }

  /**
   *set the departure and arrival options in behaviour subject
   *
   * @param {ArrivalDepartureOptions} options
   * @memberof FlightSearchUtilService
   */
  setDepartureArrivalOptions(options: ArrivalDepartureOptions) {
    this.departureArrivalSubject.next(options);
  }

  /**
   *get the state for flight list response
   *
   * @returns {Subject<SearchFlightResponse>}
   * @memberof FlightSearchUtilService
   */
  getFlightListSubject(): Subject<SearchFlightResponse> {
    return this.flightListSubject;
  }

  /**
   *set the flight list response in behaviour subject
   *
   * @param {SearchFlightResponse} options
   * @memberof FlightSearchUtilService
   */
  setFlightListSubject(options: SearchFlightResponse) {
    this.flightListSubject.next(options);
  }
}
