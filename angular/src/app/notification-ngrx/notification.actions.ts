import { createAction, props } from '@ngrx/store';

export const showAlert = createAction(
  '[Adoptarlo] Show Alert',
  props<{ message: string; alertType: 'success' | 'warning' | 'error' }>()
);

export const clearAlert = createAction('[Alert] Clear Alert');
