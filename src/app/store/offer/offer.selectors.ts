import { createSelector } from '@ngrx/store';
import { AppState } from '../root.elements';
import { OfferState } from './offer.reducer';

export const selectOfferState = (state: AppState) => state.offerState;

export const selectOfferDetails = createSelector(
  selectOfferState,
  (state: OfferState) => state.offerDetails
);
