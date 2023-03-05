import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [OfferListComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
})
export class OfferListModule {}
