import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { VoteComponent } from './components/vote/vote.component';

@NgModule({
  declarations: [OverlayComponent, VoteComponent],
  imports: [CommonModule],
  exports: [OverlayComponent, VoteComponent],
})
export class SharedModule {}
