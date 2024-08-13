import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { alertReducer } from ".//notification-ngrx/notification.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideHttpClient(), 
     provideAnimations(),
    provideToastr(), 
    provideStore(),
    provideState({name:'AlertState', reducer: alertReducer })
  ],
};
