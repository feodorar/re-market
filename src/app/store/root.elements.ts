import { AuthEffects } from './auth/auth.effects';
import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';
import { OffersEffects } from './offers/offers.effects';
import { OffersState } from './offers/offers.model';
import { offersReducer } from './offers/offers.reducer';

export const rootReducers = {
  offerState: offersReducer,
  authState: authReducer,
};

export const rootEffects = [OffersEffects, AuthEffects];

export interface AppState {
  offerState: OffersState;
  authState: AuthState;
}
