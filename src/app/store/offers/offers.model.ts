import { OfferDetails, OfferPreview } from 'openapi/generated';

export interface OffersState {
  offers: Offer[];
}

export interface Offer extends OfferPreview {
  details?: OfferDetails; // TODO: improve model
}

export const initialState: OffersState = {
  offers: [],
};
