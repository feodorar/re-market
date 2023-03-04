import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path: 'offers/:offerId',
    component: OfferComponent,
    title: 'Angebot',
  },
  {
    path: '**',
    component: OfferListComponent,
    title: 'Angebote',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
