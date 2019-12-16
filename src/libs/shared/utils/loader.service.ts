import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();
  constructor() { }

  /**
   *set the loader state to true to show loading spinner
   *
   * @memberof LoaderService
   */
  showLoader() {
    this.isLoading.next(true);
  }
  /**
   *set the loader state to false to hide loading spinner
   *
   * @memberof LoaderService
   */
  hideLoader() {
    this.isLoading.next(false);
  }
}
