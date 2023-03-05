import { createReducer, on } from '@ngrx/store';
import {
  actionCloseLoginModal,
  actionLoginSuccess,
  actionLogoutSuccess,
  actionOpenLoginModal,
} from './auth.actions';
import { initialState } from './auth.model';

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
