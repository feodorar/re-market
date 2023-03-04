import { createAction, props } from '@ngrx/store';
import { OfferPreview } from 'openapi/generated';

export const actionLoadAllOffers = createAction('[Offer List] Load all offer');
export const actionLoadAllOffersSuccess = createAction(
  '[Offer List] Load all offers: success',
  props<{ offers: OfferPreview[] }>()
);
export const actionLoadAllOffersError = createAction(
  '[Offer List] Load all offer: error',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
