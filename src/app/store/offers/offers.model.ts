import { OfferDetails, OfferPreview } from 'openapi/generated';

export interface OffersState {
  offers: Offer[];
}

export type Offer = OfferPreview | OfferDetails; // TODO: improve model

export const initialState: OffersState = {
  offers: [],
};
