import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OffersService } from 'openapi/generated';
import { of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { actionOpenLoginModal } from '../auth/auth.actions';
import { selectIsLoggedIn } from '../auth/auth.selectors';
import { AppState } from '../root.elements';
import {
  actionLoadOfferDetails,
  actionLoadOfferDetailsError,
  actionLoadOfferDetailsSuccess,
  actionPurchaseOffer,
  actionPurchaseOfferError,
  actionPurchaseOfferSuccess,
  actionVoteOffer,
  actionVoteOfferError,
  actionVoteOfferSuccess,
} from './offer.actions';

@Injectable()
export class OfferEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private offersService: OffersService
  ) {}

  loadOfferById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoadOfferDetails),
      switchMap((action) => {
        return this.offersService.getOfferById(action.offerId).pipe(
          map((offerDetails) =>
            actionLoadOfferDetailsSuccess({ offerDetails })
          ),
          catchError((error) =>
            of(
              actionLoadOfferDetailsError({
                error,
                userFriendlyErrorMsg:
                  'Es ist ein Fehler beim Laden des Angebots aufgetreten.',
              })
            )
          )
        );
      })
    )
  );

  purchaseOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionPurchaseOffer),
      withLatestFrom(this.store.select(selectIsLoggedIn)),
      switchMap(([action, isLoggedIn]) => {
        if (isLoggedIn) {
          return this.offersService.purchaseOffer(action.offerId).pipe(
            map(() => actionPurchaseOfferSuccess({ offerId: action.offerId })),
            catchError((error) =>
              of(
                actionPurchaseOfferError({
                  error,
                  userFriendlyErrorMsg:
                    'Es ist ein Fehler beim Kauf des Angebots aufgetreten.',
                })
              )
            )
          );
        } else {
          return of(actionOpenLoginModal());
        }
      })
    )
  );

  voteOffer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionVoteOffer),
      withLatestFrom(this.store.select(selectIsLoggedIn)),
      switchMap(([action, isLoggedIn]) => {
        if (isLoggedIn) {
          const endpoint =
            action.voteType === 'up'
              ? this.offersService.upvoteOffer(action.offerId)
              : this.offersService.downvoteOffer(action.offerId);
          return endpoint.pipe(
            map(() => actionVoteOfferSuccess({ offerId: action.offerId })),
            catchError((error) =>
              of(
                actionVoteOfferError({
                  error,
                  userFriendlyErrorMsg:
                    'Es ist ein Fehler beim Voten des Angebots aufgetreten.',
                })
              )
            )
          );
        } else {
          return of(actionOpenLoginModal());
        }
      })
    )
  );

  reloadOfferDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionVoteOfferSuccess),
      switchMap((action) => {
        return of(actionLoadOfferDetails({ offerId: action.offerId }));
      })
    )
  );
}
