import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfferPreview } from 'openapi/generated';

@Component({
  selector: 'ry-offer-preview-card',
  templateUrl: './offer-preview-card.component.html',
  styleUrls: ['./offer-preview-card.component.sass'],
})
export class OfferPreviewCardComponent {
  @Input() offerPreview?: OfferPreview;
  @Output() purchaseOfferEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() upvoteOfferEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() downvoteOfferEvent: EventEmitter<any> = new EventEmitter<any>();

  purchaseOffer(): void {
    this.purchaseOfferEvent.emit();
  }

  voteUp(): void {
    this.upvoteOfferEvent.emit();
  }

  voteDown(): void {
    this.downvoteOfferEvent.emit();
  }
}
