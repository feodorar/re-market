import { createAction, props } from '@ngrx/store';

export const actionOpenLoginModal = createAction('[Auth] Open Login Modal');

export const actionCloseLoginModal = createAction('[Auth] Close Login Modal');

export const actionLogin = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const actionLoginSuccess = createAction('[Auth] Login: success');

export const actionLoginError = createAction(
  '[Auth] Login: success',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);

export const actionLogout = createAction('[Auth] Logout');

export const actionLogoutSuccess = createAction('[Auth] Logout: success');

export const actionLogoutError = createAction(
  '[Auth] Logout: success',
  props<{ error: Error; userFriendlyErrorMsg: string }>()
);
