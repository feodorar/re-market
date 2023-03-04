import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ry-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.sass'],
})
export class VoteComponent {
  @Input() voteCount?: number;
  @Output() voteUpEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() voteDownEvent: EventEmitter<any> = new EventEmitter<any>();

  voteUp(): void {
    this.voteUpEvent.emit();
  }

  voteDown(): void {
    this.voteDownEvent.emit();
  }
}
