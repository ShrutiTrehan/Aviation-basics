export class SearchFlightRequest {
    departure: string;
    arrival: string;
    doj: Date;
    dor?: Date;
    travellers: number;
  }