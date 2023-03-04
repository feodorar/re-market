import { AuthEffects } from './auth/auth.effects';
import { authReducer, AuthState } from './auth/auth.reducer';
import { OfferListEffects } from './offer-list/offer-list.effects';
import {
  offerListReducer,
  OfferListState,
} from './offer-list/offer-list.reducer';
import { OfferEffects } from './offer/offer.effects';
import { offerReducer, OfferState } from './offer/offer.reducer';

export const rootReducers = {
  offerListState: offerListReducer,
  offerState: offerReducer,
  authState: authReducer,
};

export const rootEffects = [OfferListEffects, OfferEffects, AuthEffects];

export interface AppState {
  offerListState: OfferListState;
  offerState: OfferState;
  authState: AuthState;
}
