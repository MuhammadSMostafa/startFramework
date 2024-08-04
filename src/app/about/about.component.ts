import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  headline:string ="ABOUT COMPONENT";
  bgColor:string = "white";
}
