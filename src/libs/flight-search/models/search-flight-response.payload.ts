export class SearchFlightResponse {
    departureFlight: FlightResponse[];
    returnFlight: FlightResponse[];
  }

  export class FlightResponse {
    flight: string;
    flightNumber: string;
    price: number;
    departureTime: string;
    arrivalTime: string;
  }
