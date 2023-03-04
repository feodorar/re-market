import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OfferPreview } from 'openapi/generated';
import { actionLoadAllOffers } from '../store/offer-list/offer-list.actions';
import { selectAllOffersSortedByVoted } from '../store/offer-list/offer-list.selectors';
import {
  actionPurchaseOffer,
  actionVoteOffer,
} from '../store/offer/offer.actions';
import { AppState } from '../store/root.elements';

@Component({
  selector: 'ry-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.sass'],
})
export class OfferListComponent implements OnInit {
  offers$ = this.store.select(selectAllOffersSortedByVoted);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(actionLoadAllOffers());
  }

  purchaseOffer(offer: OfferPreview): void {
    this.store.dispatch(actionPurchaseOffer({ offerId: offer.id }));
  }

  upvoteOffer(offer: OfferPreview): void {
    this.store.dispatch(actionVoteOffer({ offerId: offer.id, voteType: 'up' }));
  }

  downvoteOffer(offer: OfferPreview): void {
    this.store.dispatch(
      actionVoteOffer({ offerId: offer.id, voteType: 'down' })
    );
  }
}
