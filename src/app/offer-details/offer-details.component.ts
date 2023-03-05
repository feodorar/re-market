import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectOfferById } from '../store/offers/offers.selectors';
import {
  actionLoadOfferDetails,
  actionPurchaseOffer,
  actionVoteOffer,
} from '../store/offers/offers.actions';
import { AppState } from '../store/root.elements';
import { Offer } from '../store/offers/offers.model';

@Component({
  selector: 'ry-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.sass'],
})
export class OfferDetailsComponent implements OnInit {
  offer$: Observable<Offer | undefined> = of();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const offerId = this.route.snapshot.params?.['offerId'];
    this.store.dispatch(actionLoadOfferDetails({ offerId }));
    this.offer$ = this.store.select(selectOfferById(offerId));
  }

  voteUp(offer: Offer): void {
    this.store.dispatch(actionVoteOffer({ offerId: offer.id, voteType: 'up' }));
  }

  voteDown(offer: Offer): void {
    this.store.dispatch(
      actionVoteOffer({ offerId: offer.id, voteType: 'down' })
    );
  }

  purchaseOffer(offer: Offer): void {
    this.store.dispatch(actionPurchaseOffer({ offerId: offer.id }));
  }
}
