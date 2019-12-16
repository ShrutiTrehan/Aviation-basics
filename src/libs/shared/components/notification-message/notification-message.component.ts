import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../utils/notification.service';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent implements OnInit {
  messageSubscription: Subscription;
  message: string;

  constructor(private snackBar: MatSnackBar, private notificationService: NotificationService) { }

  ngOnInit() {
    this.subscribeToMessageNotifications();
  }

  /**
   *subscribe to changes in notifications
   *
   * @memberof NotificationMessageComponent
   */
  subscribeToMessageNotifications() {
    this.messageSubscription = this.notificationService.messageNotificationChange.subscribe(res => {
      this.message = res;
      this.snackBar.open(this.message, '', {
        duration: 3000
      });
    });
  }

  /**
   *destroy the subscriptions
   *
   * @memberof NotificationMessageComponent
   */
  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
