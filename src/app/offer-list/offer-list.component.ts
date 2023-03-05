import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OfferPreview } from 'openapi/generated';
import { actionLoadAllOffers } from '../store/offers/offers.actions';
import {
  selectAllOffersSortedByVoted,
  selectMoreOffersToLoad,
} from '../store/offers/offers.selectors';
import {
  actionPurchaseOffer,
  actionVoteOffer,
} from '../store/offers/offers.actions';
import { AppState } from '../store/root.elements';

export const OFFER_LIST_PAGE_SIZE = 20;

@Component({
  selector: 'ry-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.sass'],
})
export class OfferListComponent implements OnInit {
  offers$ = this.store.select(selectAllOffersSortedByVoted);
  moreToLoad$ = this.store.select(selectMoreOffersToLoad);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loadMore();
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

  loadMore(): void {
    this.store.dispatch(
      actionLoadAllOffers({ pageSize: OFFER_LIST_PAGE_SIZE, page: 0 })
    );
  }
}
