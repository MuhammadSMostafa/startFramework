import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeadlineComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  headline:string ="PORTFOLIO COMPONENT";
  bgColor:string = "#2c3e50";
  srcImg!:string;
  @ViewChild('showImgContainer') showImgContainer!: ElementRef;
  showImg(img:HTMLImageElement):void{
    this.srcImg = img.getAttribute("src")!;
    this.showImgContainer.nativeElement.classList.remove("d-none");
  }
  closeImg(target:EventTarget):void{
    if(target == this.showImgContainer.nativeElement){
      this.showImgContainer.nativeElement.classList.add("d-none");
    }
  }
  portfolioImgs:string[]=[
    './assets/Images/port1.png',
    './assets/Images/port2.png',
    './assets/Images/port3.png',
    './assets/Images/port1.png',
    './assets/Images/port2.png',
    './assets/Images/port3.png',
  ]
}
