import {Component, Input} from '@angular/core';

@Component({
  selector: 'uit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title!: string
  @Input() total!: string
  @Input() leftText!: string
  @Input() leftBatch!: string
  @Input() leftNumber!: string
  @Input() rightText!: string
  @Input() rightBatch!: string
  @Input() rightNumber!: string
  @Input() icon!: string

}
