import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/libs/shared/utils/notification.service';
import { FLIGHT_SEARCH_LAYOUT_CONSTANTS } from '../../constants/flight-search.constants';
import { SearchFlightRequest } from '../../models/search-flight-request.payload';
import { SearchFlightResponse } from '../../models/search-flight-response.payload';
import { FlightSearchUtilService } from '../../utils/flight-search-util.service';

@Component({
  selector: 'app-flight-search-layout',
  templateUrl: './flight-search-layout.component.html',
  styleUrls: ['./flight-search-layout.component.scss']
})
export class FlightSearchLayoutComponent implements OnInit, OnDestroy {
  FLIGHT_SEARCH_LAYOUT_CONSTANTS = FLIGHT_SEARCH_LAYOUT_CONSTANTS;
  departureArrivalSubscription: Subscription;
  flightListSubscription: Subscription;
  arrivalOptions: string[];
  departureOptions: string[];
  flightList: SearchFlightResponse;

  constructor(private flightSearchUtil: FlightSearchUtilService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.setSubscriptions();
    this.fetchArrivalAndDepartureOptions();
  }

  /**
   *set the subscriptions that listen to changes in data
   *
   * @memberof FlightSearchLayoutComponent
   */
  setSubscriptions() {
    this.departureArrivalSubscription = this.flightSearchUtil.getDepartureArrivalOptions().subscribe(res => {
      this.arrivalOptions = res.arrival;
      this.departureOptions = res.departure;
    }, err => {
      this.notificationService.notify(err);
    });
    this.flightListSubscription = this.flightSearchUtil.getFlightListSubject().subscribe(res => {
      if (res && res.departureFlight) {
        this.flightList = res;
      }
    }, err => {
      this.notificationService.notify(err);
    })
  }

  /**
   *call utility to fetch arrival and departure options
   *
   * @memberof FlightSearchLayoutComponent
   */
  fetchArrivalAndDepartureOptions() {
    this.flightSearchUtil.getArrivalAndDeparture().subscribe(res => {
      this.flightSearchUtil.setDepartureArrivalOptions({
        departure: res.departure && res.departure.length ? res.departure : [],
        arrival: res.arrival && res.arrival.length ? res.arrival : []
      })
    }, err => {
      this.notificationService.notify(err);
    });
  }

  /**
   *event handler for click of search button
   *
   * @memberof FlightSearchLayoutComponent
   */
  searchFlights(data: SearchFlightRequest) {
    this.flightSearchUtil.getFlightList(data).subscribe(res => {
      this.flightSearchUtil.setFlightListSubject(res);
    }, err => {
      this.notificationService.notify(err);
    })
  }

  /**
   *destroy the subscriptions
   *
   * @memberof FlightSearchLayoutComponent
   */
  ngOnDestroy() {
    this.departureArrivalSubscription.unsubscribe();
    this.flightListSubscription.unsubscribe();
  }

}
