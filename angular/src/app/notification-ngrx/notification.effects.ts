import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import * as NotificatioActions from './notification.actions';

@Injectable()
export class AlertEffects {
  constructor(private toastr: ToastrService, private actions$: Actions ) {}
  
  showAlert$ = createEffect(() => this.actions$.pipe(
    ofType(NotificatioActions.showAlert),
    tap(({ message, alertType }) => {
      switch(alertType) {
        case 'success':
          this.toastr.success(message);
          break;
        case 'warning':
          this.toastr.warning(message);
          break;
        case 'error':
          this.toastr.error(message);
          break;
        default:
          this.toastr.show(message);
      }
    })
  ), { dispatch: false });
}

