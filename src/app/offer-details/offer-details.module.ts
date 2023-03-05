import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OfferDetailsComponent],
  imports: [CommonModule, SharedModule],
})
export class OfferDetailsModule {}
