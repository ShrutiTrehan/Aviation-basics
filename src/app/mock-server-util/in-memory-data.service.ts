import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

/**
 *mock util for api calls
 *
 * @export
 * @class InMemoryDataService
 * @implements {InMemoryDbService}
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  /**
   *create mock data
   *
   * @returns
   * @memberof InMemoryDataService
   */
  createDb() {
    const flightSearchOptions = {
      arrivalDepartureOptions: {
        arrival: ['DEL'],
        departure: ['DEL']
      },
      flightList: {
        departureFlight: [{
          flight: 'aaaa',
          flightNumber: 'aa101',
          price: 8000,
          departureTime: '09:00',
          arrivalTime: '12:00',
        },
        {
          flight: 'bbbb',
          flightNumber: 'bb101',
          price: 10000,
          departureTime: '13:00',
          arrivalTime: '18:00',
        }],
        returnFlight: [{
          flight: 'aaaa',
          flightNumber: 'aa101',
          price: 13000,
          departureTime: '19:00',
          arrivalTime: '22:00',
        },
        {
          flight: 'bbbb',
          flightNumber: 'bb101',
          price: 6000,
          departureTime: '15:00',
          arrivalTime: '21:00',
        }]
      }
    };
    return { flightSearchOptions };
  }
}
