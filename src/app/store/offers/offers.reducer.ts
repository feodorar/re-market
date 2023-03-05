import { createReducer, on } from '@ngrx/store';
import {
  actionLoadAllOffersSuccess,
  actionLoadOfferDetailsSuccess,
  actionVoteOfferSuccess,
} from './offers.actions';
import { initialState } from './offers.model';

export const offersReducer = createReducer(
  initialState,
  on(actionLoadAllOffersSuccess, (state, { offerListPage }) => {
    return {
      ...state,
      offers: [...state.offers, ...offerListPage.offers],
      totalCount: offerListPage.totalCount,
    };
  }),
  on(actionLoadOfferDetailsSuccess, (state, { offerDetails }) => {
    return {
      ...state,
      offers: [
        ...state.offers.filter((o) => o.id !== offerDetails.id),
        offerDetails,
      ],
    };
  }),
  on(actionVoteOfferSuccess, (state, { offerId, voteType }) => {
    return {
      ...state,
      offers: state.offers.map((o) =>
        o.id !== offerId
          ? o
          : {
              ...o,
              voteCount: voteType === 'up' ? o.voteCount + 1 : o.voteCount - 1,
              hasUserVotedForThis: true,
            }
      ),
    };
  })
);
