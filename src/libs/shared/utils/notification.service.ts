import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 *service to show notifications
 *
 * @export
 * @class NotificationService
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /**
   *subject to hold notification change state
   *
   * @memberof NotificationService
   */
  messageNotificationChange = new Subject<string>();
  /**
   *Creates an instance of NotificationService.
   * @memberof NotificationService
   */
  constructor() { }

  /**
   *set the next state for notifications
   *
   * @param {string} message
   * @memberof NotificationService
   */
  notify(message: string) {
    this.messageNotificationChange.next(message);
  }
}
