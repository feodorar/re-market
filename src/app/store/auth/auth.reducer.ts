import { createReducer, on } from '@ngrx/store';
import {
  actionCloseLoginModal,
  actionLoginSuccess,
  actionLogoutSuccess,
  actionOpenLoginModal,
} from './auth.actions';

export interface AuthState {
  showLoginModal: boolean;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  showLoginModal: false,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(actionOpenLoginModal, (state) => ({
    ...state,
    showLoginModal: true,
  })),
  on(actionLoginSuccess, (state) => ({
    ...state,
    showLoginModal: false,
    isLoggedIn: true,
  })),
  on(actionCloseLoginModal, (state) => ({
    ...state,
    showLoginModal: false,
  })),
  on(actionLogoutSuccess, (state) => ({
    ...state,
    isLoggedIn: false,
  }))
);
