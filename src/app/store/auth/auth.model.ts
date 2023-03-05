export interface AuthState {
    showLoginModal: boolean;
    isLoggedIn: boolean;
  }
  
  export const initialState: AuthState = {
    showLoginModal: false,
    isLoggedIn: false,
  };