import { createSelector } from '@ngrx/store';
import { AppState } from '../root.elements';
import { OfferListState } from './offer-list.reducer';

export const selectOfferState = (state: AppState) => state.offerListState;

export const selectAllOffersSortedByVoted = createSelector(
  selectOfferState,
  (state: OfferListState) =>
    state.offers.sort((o1, o2) => o1.voteCount - o2.voteCount)
);
