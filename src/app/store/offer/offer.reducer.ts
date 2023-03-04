import { createReducer, on } from '@ngrx/store';
import { OfferDetails } from 'openapi/generated';
import { actionLoadOfferDetailsSuccess } from './offer.actions';

export interface OfferState {
  offerDetails?: OfferDetails;
}

export const initialState: OfferState = {};

export const offerReducer = createReducer(
  initialState,
  on(actionLoadOfferDetailsSuccess, (state, { offerDetails }) => ({
    ...state,
    offerDetails,
  }))
);
