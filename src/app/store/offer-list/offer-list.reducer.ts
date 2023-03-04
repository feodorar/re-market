import { createReducer, on } from '@ngrx/store';
import { OfferPreview } from 'openapi/generated';
import { actionLoadAllOffersSuccess } from './offer-list.actions';

export interface OfferListState {
  offers: OfferPreview[];
}

export const initialState: OfferListState = {
  offers: [],
};

export const offerListReducer = createReducer(
  initialState,
  on(actionLoadAllOffersSuccess, (state, { offers }) => ({ ...state, offers }))
);
