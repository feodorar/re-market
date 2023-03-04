import { createSelector } from '@ngrx/store';
import { AppState } from '../root.elements';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: AppState) => state.authState;

export const selectShowLoginModal = createSelector(
  selectAuthState,
  (state: AuthState) => state.showLoginModal
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);
