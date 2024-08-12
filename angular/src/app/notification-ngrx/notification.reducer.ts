// notification.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { showSuccessNotification, showErrorNotification, closeNotification } from './notification.actions';

export interface NotificationState {
  type: string | null;
  message: string | null;
  isVisible: boolean;
}

export const initialState: NotificationState = {
  type: null,
  message: null,
  isVisible: false,
};

export const notificationReducer = createReducer(
  initialState,
  on(showSuccessNotification, (state, { message }) => ({
    type: 'success',
    message,
    isVisible: true,
  })),
  on(showErrorNotification, (state, { message }) => ({
    type: 'error',
    message,
    isVisible: true,
  })),
  on(closeNotification, (state) => ({
    ...state,
    isVisible: false,
  }))
);
 