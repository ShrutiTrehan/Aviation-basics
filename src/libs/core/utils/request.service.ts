import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

   /**
   * Get Request
   *
   * @param {string} query
   * @param {({ [name: string]: string | string[] })} [headers]
   * @param {object} [params]
   * @returns {Observable<any>}
   * @memberof RequestService
   */
  get(query: string): Observable<any> {
    return this.http.get(query);
  }
}
