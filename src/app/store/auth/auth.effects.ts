import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'openapi/generated';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  actionLogin,
  actionLoginError,
  actionLoginSuccess,
  actionLogout,
  actionLogoutError,
  actionLogoutSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLogin),
      switchMap((action) =>
        this.authService.loginUser(action.username, action.password).pipe(
          map(() => actionLoginSuccess()),
          catchError((error) =>
            of(
              actionLoginError({
                error,
                userFriendlyErrorMsg:
                  'Es ist ein Fehler beim Login aufgetreten.',
              })
            )
          )
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLogout),
      switchMap(() =>
        this.authService.logoutUser().pipe(
          map(() => actionLogoutSuccess()),
          catchError((error) =>
            of(
              actionLogoutError({
                error,
                userFriendlyErrorMsg:
                  'Es ist ein Fehler beim Logout aufgetreten.',
              })
            )
          )
        )
      )
    )
  );
}
