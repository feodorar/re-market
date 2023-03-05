import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialAppState } from '../store/root.elements';

import { OfferListComponent } from './offer-list.component';

describe('OfferListComponent', () => {
  let component: OfferListComponent;
  let fixture: ComponentFixture<OfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferListComponent],
      providers: [provideMockStore({ initialState: initialAppState })],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
