import { createAction, props } from '@ngrx/store';
import { OfferDetails, OfferListPage } from 'openapi/generated';

export const actionLoadAllOffers = createAction(
  '[Offers] Load all offers',
  props<{ pageSize: number; page: number }>()
);
export const actionLoadAllOffersSuccess = createAction(
  '[Offers] Load all offers: success',
  props<{ offerListPage: OfferListPage }>()
);
export const actionLoadAllOffersError = createAction(
  '[Offers] Load all offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);

export const actionLoadOfferDetails = createAction(
  '[Offers] Load offer details by id',
  props<{ offerId: string }>()
);
export const actionLoadOfferDetailsSuccess = createAction(
  '[Offers] Load offer details by id: success',
  props<{ offerDetails: OfferDetails }>()
);
export const actionLoadOfferDetailsError = createAction(
  '[Offers] Load offer details by id: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
export const actionPurchaseOffer = createAction(
  '[Offers] Purchase offer',
  props<{ offerId: string }>()
);
export const actionPurchaseOfferSuccess = createAction(
  '[Offers] Purchase offer: success',
  props<{ offerId: string }>()
);
export const actionPurchaseOfferError = createAction(
  '[Offers] Purchase offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);

export const actionVoteOffer = createAction(
  '[Offers] Vote offer',
  props<{ offerId: string; voteType: 'up' | 'down' }>()
);
export const actionVoteOfferSuccess = createAction(
  '[Offers] Vote offer: success',
  props<{ offerId: string; voteType: 'up' | 'down' }>()
);
export const actionVoteOfferError = createAction(
  '[Offers] Vote offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
