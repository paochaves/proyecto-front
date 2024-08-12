 // notification.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NotificationState } from './notification.reducer';

export const selectNotificationState = createFeatureSelector<NotificationState>('notification');

export const selectNotificationMessage = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.message
);

export const selectNotificationType = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.type
);

export const selectIsNotificationVisible = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.isVisible
);
 