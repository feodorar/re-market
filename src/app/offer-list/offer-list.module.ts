import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list.component';
import { OfferPreviewCardComponent } from './offer-preview-card/offer-preview-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OfferListComponent, OfferPreviewCardComponent],
  imports: [CommonModule, SharedModule],
})
export class OfferListModule {}
