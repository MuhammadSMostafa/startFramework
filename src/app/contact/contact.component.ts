import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  headline:string ="CONTACT SECTION";
  bgColor:string = "#2c3e50";
}
