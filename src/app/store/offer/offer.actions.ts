import { createAction, props } from '@ngrx/store';
import { OfferDetails } from 'openapi/generated';

export const actionLoadOfferDetails = createAction(
  '[Offer] Load offer by id',
  props<{ offerId: string }>()
);
export const actionLoadOfferDetailsSuccess = createAction(
  '[Offer] Load offer by id: success',
  props<{ offerDetails: OfferDetails }>()
);
export const actionLoadOfferDetailsError = createAction(
  '[Offer] Load offer by id: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
export const actionClearOfferDetails = createAction(
  '[Offer] Clear offer details'
);
export const actionPurchaseOffer = createAction(
  '[Offer] Purchase offer',
  props<{ offerId: string }>()
);
export const actionPurchaseOfferSuccess = createAction(
  '[Offer] Purchase offer: success',
  props<{ offerId: string }>()
);
export const actionPurchaseOfferError = createAction(
  '[Offer] Purchase offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);

export const actionVoteOffer = createAction(
  '[Offer] Vote offer',
  props<{ offerId: string; voteType: 'up' | 'down' }>()
);
export const actionVoteOfferSuccess = createAction(
  '[Offer] Vote offer: success',
  props<{ offerId: string }>()
);
export const actionVoteOfferError = createAction(
  '[Offer] Vote offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
