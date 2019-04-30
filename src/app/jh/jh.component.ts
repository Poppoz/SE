import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jh',
  templateUrl: './jh.component.html',
  styleUrls: ['./jh.component.css']
})
export class JhComponent implements OnInit {
  chapterNo: number;
  blue: boolean;
  constructor() {}
  ngOnInit() {
    this.blue = true;
  }

  coverUp() {
    const coverCloud = document.getElementById('cover-cloud');
    coverCloud.classList.remove('triggered-back');
    coverCloud.classList.add('triggered');
  }

  coverDown() {
    const coverCloud = document.getElementById('cover-cloud');
    coverCloud.classList.remove('triggered');
    coverCloud.classList.add('triggered-back');
  }

  changeChapter() {
    console.log('triggered');
    if (this.blue) {
      this.coverUp();
      setTimeout(() => {
        this.coverDown();
        document
          .getElementsByClassName('hero')[0]
          .classList.remove('bg-moonstone');
        this.blue = false;
      }, 1500);
    }
  }
}
