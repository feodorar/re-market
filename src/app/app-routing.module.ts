import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

const routes: Routes = [
  {
    path: 'offers/:offerId',
    component: OfferDetailsComponent,
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
