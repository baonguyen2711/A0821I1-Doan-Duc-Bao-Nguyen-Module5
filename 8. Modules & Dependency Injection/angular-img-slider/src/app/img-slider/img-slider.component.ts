import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  listImage: string[] = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  img: string;
  indexImage: number;
  constructor() {
    this.indexImage = 0;
    this.img = this.listImage[this.indexImage];
  }

  ngOnInit(): void {
  }

  previous(): void {
    if(this.indexImage == 0) {
      this.indexImage = this.listImage.length - 1;
    }
    else {
      this.indexImage--;
    }
    this.img = this.listImage[this.indexImage];
  }

  next(): void {
    if(this.indexImage == this.listImage.length - 1) {
      this.indexImage = 0;
    }
    else {
      this.indexImage++;
    }
    this.img = this.listImage[this.indexImage];
  }

}
