import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.css'
})
export class HeadlineComponent {
  @Input({ required: true }) headline!: string;
  @Input({ required: true }) bgColor!: string;
}
