import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  templateUrl: './card.html'
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() price!: number;
}
