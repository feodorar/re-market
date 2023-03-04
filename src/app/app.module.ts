import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferListModule } from './offer-list/offer-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApiModule, Configuration } from 'openapi/generated';
import { HttpClientModule } from '@angular/common/http';
import { rootEffects, rootReducers } from './store/root.elements';
import { OfferModule } from './offer/offer.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OfferListModule,
    OfferModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'api',
      });
    }),
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(rootEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
