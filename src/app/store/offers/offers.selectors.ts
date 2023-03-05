import { createSelector } from '@ngrx/store';
import { OfferDetails } from 'openapi/generated';
import { AppState } from '../root.elements';
import { OffersState } from './offers.model';

export const selectOfferState = (state: AppState) => state.offerState;

export const selectAllOffersSortedByVoted = createSelector(
  selectOfferState,
  (state: OffersState) =>
    // TODO: sort would be in backend
    state.offers.slice().sort((o1, o2) => {
      return o2.voteCount.valueOf() - o1.voteCount.valueOf();
    })
);

export const selectOfferById = (offerId: string) =>
  createSelector(selectOfferState, (state: OffersState) => {
    return state.offers.find((o) => o.id === offerId) as OfferDetails; // TODO: fix type of Offer in model
  });

export const selectMoreOffersToLoad = createSelector(
  selectOfferState,
  (state: OffersState) => {
    return state.totalCount ? state.offers.length < state.totalCount : true;
  }
);
