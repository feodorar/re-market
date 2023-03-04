import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { OfferDetails } from 'openapi/generated';
import {
  actionClearOfferDetails,
  actionLoadOfferDetails,
  actionPurchaseOffer,
  actionVoteOffer,
} from '../store/offer/offer.actions';
import { selectOfferDetails } from '../store/offer/offer.selectors';
import { AppState } from '../store/root.elements';

@Component({
  selector: 'ry-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.sass'],
})
export class OfferComponent implements OnInit, OnDestroy {
  offerDetails$ = this.store.select(selectOfferDetails);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const offerId = this.route.snapshot.params?.['offerId'];
    this.store.dispatch(actionLoadOfferDetails({ offerId }));
  }

  voteUp(offer: OfferDetails): void {
    this.store.dispatch(actionVoteOffer({ offerId: offer.id, voteType: 'up' }));
  }

  voteDown(offer: OfferDetails): void {
    this.store.dispatch(
      actionVoteOffer({ offerId: offer.id, voteType: 'down' })
    );
  }

  purchaseOffer(offer: OfferDetails): void {
    this.store.dispatch(actionPurchaseOffer({ offerId: offer.id }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(actionClearOfferDetails());
  }
}
