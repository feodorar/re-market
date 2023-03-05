import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OfferPreview, OffersService } from 'openapi/generated';
import { Observable, of } from 'rxjs';
import {
  actionLoadAllOffers,
  actionLoadAllOffersError,
  actionLoadAllOffersSuccess,
} from './offers.actions';
import { OffersEffects } from './offers.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

const mockOffer: OfferPreview = {
  id: 'mockId',
  title: 'Mock Title',
  price: 15.99,
  voteCount: 3,
};

describe('OffersEffects', () => {
  let actions$: Observable<any>;
  let effects: OffersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OffersEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });
    effects = TestBed.inject(OffersEffects);
  });

  it('should loadOffers correctly', () => {
    actions$ = of(actionLoadAllOffers({ page: 0, pageSize: 100 }));
    const offerListPage = { totalCount: 100, offers: [mockOffer] };
    const offersServiceSpy = jasmine.createSpyObj(OffersService, [
      'getAllOffers',
    ]);
    offersServiceSpy.getAllOffers.and.returnValue(of());
    effects.loadOffers$.subscribe((action) => {
      expect(action).toEqual(actionLoadAllOffersSuccess({ offerListPage }));
    });
  });

  it('should handle error on getAllOffers correctly', () => {
    actions$ = of(actionLoadAllOffers({ page: 0, pageSize: 100 }));
    const offersServiceSpy = jasmine.createSpyObj(OffersService, [
      'getAllOffers',
    ]);
    const error = new HttpErrorResponse({ error: 'Ooops' });
    offersServiceSpy.getAllOffers.and.throwError(error);
    effects.loadOffers$.subscribe((action) => {
      expect(action).toEqual(
        actionLoadAllOffersError({
          error,
          userFriendlyErrorMsg:
            'Es ist ein Fehler beim Laden der Angebote aufgetreten.',
        })
      );
    });
  });
});
