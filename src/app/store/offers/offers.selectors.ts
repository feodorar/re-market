import { createSelector } from '@ngrx/store';
import { AppState } from '../root.elements';
import { OffersState } from './offers.model';

export const selectOfferState = (state: AppState) => state.offerState;

export const selectAllOffersSortedByVoted = createSelector(
  selectOfferState,
  (state: OffersState) => state.offers
);

export const selectOfferById = (offerId: string) =>
  createSelector(selectOfferState, (state: OffersState) => {
    return state.offers.find((o) => o.id === offerId);
  });
