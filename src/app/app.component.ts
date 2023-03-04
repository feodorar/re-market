import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionLogout, actionOpenLoginModal } from './store/auth/auth.actions';
import {
  selectIsLoggedIn,
  selectShowLoginModal,
} from './store/auth/auth.selectors';
import { AppState } from './store/root.elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  showLoginModal$ = this.store.select(selectShowLoginModal);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store<AppState>) {}

  login(): void {
    this.store.dispatch(actionOpenLoginModal());
  }

  logout(): void {
    this.store.dispatch(actionLogout());
  }
}
