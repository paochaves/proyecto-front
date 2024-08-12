// notification.actions.ts
import { createAction, props } from '@ngrx/store';

export const showSuccessNotification = createAction(
  '[Notification] Show Success',
  props<{ message: string }>()
);

export const showErrorNotification = createAction(
  '[Notification] Show Error',
  props<{ message: string }>()
);

export const clearNotification = createAction(
  '[Notification] Clear Notification'
);

export const closeNotification = createAction('[Notification] Close');
