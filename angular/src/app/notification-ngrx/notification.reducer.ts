import { createReducer, on } from "@ngrx/store";
import { showAlert, } from "./notification.actions";

export interface AlertState {
	message: string;
	alertType: 'success' | 'warning' | 'error';
  }
  
  const initialState: AlertState = {
	message: '',
	alertType: 'success',
  };
  
  export const alertReducer = createReducer(
	initialState,
	on(showAlert, (state, { message, alertType }) => ({ ...state, message, alertType }))
  );
 