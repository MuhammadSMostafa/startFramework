import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  headline:string ="START FRAMEWORK";
  bgColor:string = "white";
}
