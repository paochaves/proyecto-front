/*  // notification.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationState } from '../../notification-ngrx/notification.reducer';
import {
  selectNotificationMessage,
  selectNotificationType,
  selectIsNotificationVisible
} from '../../notification-ngrx/notification.selectors';
import { closeNotification } from '../../notification-ngrx/notification.actions';

@Component({
  selector: 'app-notification',
  templateUrl: './notifications.component.html',
  styles: [
    `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 5px;
        color: #fff;
      }
      .success {
        background-color: green;
      }
      .error {
        background-color: red;
      }
    `,
  ],
})
export class NotificationComponent {
  message$: Observable<string | null>;
  type$: Observable<'success' | 'error' | null>;
  isVisible$: Observable<boolean>;

  constructor(private store: Store<NotificationState>) {
    this.message$ = this.store.select(selectNotificationMessage);
    this.type$ = this.store.select(selectNotificationType);
    this.isVisible$ = this.store.select(selectIsNotificationVisible);
  }

  close() {
    this.store.dispatch(closeNotification());
  }
}
  */