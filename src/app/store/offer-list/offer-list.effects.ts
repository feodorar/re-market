import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersService } from 'openapi/generated';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {
  actionLoadAllOffers,
  actionLoadAllOffersError,
  actionLoadAllOffersSuccess,
} from './offer-list.actions';

@Injectable()
export class OfferListEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoadAllOffers),
      exhaustMap(() =>
        this.offersService.getAllOffers().pipe(
          map((offers) => actionLoadAllOffersSuccess({ offers })),
          catchError((error) =>
            of(
              actionLoadAllOffersError({
                error,
                userFriendlyErrorMsg:
                  'Es ist ein Fehler beim Laden der Angebote aufgetreten.',
              })
            )
          )
        )
      )
    )
  );
}
