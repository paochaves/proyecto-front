export interface AlertState {
  message: string;
  alertType: 'success' | 'warning' | 'error' | null;
}

export const initialState: AlertState = {
  message: '',
  alertType: null,
};
