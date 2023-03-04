import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  actionCloseLoginModal,
  actionLogin,
} from 'src/app/store/auth/auth.actions';
import { AppState } from 'src/app/store/root.elements';

@Component({
  selector: 'ry-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.sass'],
})
export class LoginModalComponent {
  form = this.formBuilder.group({
    usernameControl: ['', Validators.required],
    passwordControl: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  login() {
    // TODO: fix nullcheck
    this.store.dispatch(
      actionLogin({
        username: this.usernameControl.value ?? '',
        password: this.passwordControl.value ?? '',
      })
    );
  }

  closeLoginModal(): void {
    this.store.dispatch(actionCloseLoginModal());
  }

  get usernameControl(): AbstractControl {
    return this.form.controls.usernameControl;
  }

  get passwordControl(): AbstractControl {
    return this.form.controls.passwordControl;
  }
}
