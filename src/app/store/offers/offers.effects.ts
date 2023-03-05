import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { OffersService } from 'openapi/generated';
import { of } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';
import { actionOpenLoginModal } from '../auth/auth.actions';
import { selectIsLoggedIn } from '../auth/auth.selectors';
import { AppState } from '../root.elements';
import {
  actionLoadAllOffers,
  actionLoadAllOffersError,
  actionLoadAllOffersSuccess,
  actionLoadOfferDetails,
  actionLoadOfferDetailsError,
  actionLoadOfferDetailsSuccess,
  actionPurchaseOffer,
  actionPurchaseOfferError,
  actionPurchaseOfferSuccess,
  actionVoteOffer,
  actionVoteOfferError,
  actionVoteOfferSuccess,
} from './offers.actions';

@Injectable()
export class OffersEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionLoadAllOffers),
      exhaustMap((action) =>
        this.offersService.getAllOffers(action.page, action.pageSize).pipe(
          map((offerListPage) => actionLoadAllOffersSuccess({ offerListPage })),
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
            map(() =>
              actionVoteOfferSuccess({
                offerId: action.offerId,
                voteType: action.voteType,
              })
            ),
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

  // reloadOfferDetails$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(actionVoteOfferSuccess),
  //     switchMap((action) => {
  //       return of(actionLoadOfferDetails({ offerId: action.offerId }));
  //     })
  //   )
  // );

  handleErrors$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionLoadAllOffersError,
          actionLoadOfferDetailsError,
          actionPurchaseOfferError,
          actionVoteOfferError
        ),
        tap((action) => {
          // TODO: log action.error
          // TODO: display  action.userFriendlyErrorMsg
        })
      ),
    { dispatch: false }
  );
}
