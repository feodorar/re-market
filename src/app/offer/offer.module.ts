import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OfferComponent],
  imports: [CommonModule, SharedModule],
})
export class OfferModule {}
