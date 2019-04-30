import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jh',
  templateUrl: './jh.component.html',
  styleUrls: ['./jh.component.css']
})
export class JhComponent implements OnInit {
  chapterNo: number;
  blue: boolean;
  title: string;
  subTitle: string;
  modalOpen: boolean;
  constructor() {}
  ngOnInit() {
    this.blue = true;
    this.modalOpen = true;
    this.title = 'Jekyll & Hyde';
    this.subTitle = 'Chapters';
  }

  //Covers for Primary
  coverUpRed() {
    const coverCloud = document.getElementById('cover-cloud-red');
    coverCloud.classList.remove('triggered-back');
    coverCloud.classList.add('triggered');
  }
  coverDownRed() {
    const coverCloud = document.getElementById('cover-cloud-red');
    coverCloud.classList.remove('triggered');
    coverCloud.classList.add('triggered-back');
  }

  //Covers for Moonstone
  coverUpBlue() {
    const coverCloud = document.getElementById('cover-cloud-blue');
    coverCloud.classList.remove('triggered-back');
    coverCloud.classList.add('triggered');
  }
  coverDownBlue() {
    const coverCloud = document.getElementById('cover-cloud-blue');
    coverCloud.classList.remove('triggered');
    coverCloud.classList.add('triggered-back');
  }

  //-----------------------------------------------------------------------//

  //Update Chapter Number Function
  changeChapterNo() {
    if (!this.chapterNo) {
      this.chapterNo = 1;
    } else if (this.chapterNo == 10) {
    } else {
      this.chapterNo = this.chapterNo + 1;
    }
  }

  updateChapterInfo() {
    console.log(this.chapterNo);
    if (this.chapterNo == 1) {
      this.subTitle = 'Story of the Door';
      this.title = 'The Sinister Door';
    }
    if (this.chapterNo == 2) {
      this.subTitle = 'Search for Mr Hyde';
      this.title = 'Hyde & Seek';
    }
    if (this.chapterNo == 3) {
      this.subTitle = 'Dr Jekyll was quite at ease';
      this.title = "Utterson's Worries";
    }
    if (this.chapterNo == 4) {
      this.subTitle = 'The Carew murder case';
      this.title = 'Carew Murder';
    }
    if (this.chapterNo == 5) {
      this.subTitle = 'Incident of the letter';
      this.title = 'Jekyll is "deadly sick"';
    }
    if (this.chapterNo == 6) {
      this.subTitle = 'Remarkable incident of Dr Lanyon';
      this.title = "Lanyon's Last";
    }
    if (this.chapterNo == 7) {
      this.subTitle = 'Incident at the window';
      this.title = 'Illness & Handwriting';
    }
    if (this.chapterNo == 8) {
      this.subTitle = 'The last night';
      this.title = 'The end of Dr. Jekyll';
    }
    if (this.chapterNo == 9) {
      this.subTitle = "Dr Lanyon's Narrative";
      this.title = "Lanyon's story";
    }
    if (this.chapterNo == 10) {
      this.subTitle = "Henry Jekyll's Full Statement of the case";
      this.title = 'The story of Mr Hyde';
    }
  }

  changeChapter() {
    console.log('triggered');
    setTimeout(() => {
      this.changeChapterNo();
      this.updateChapterInfo();
    }, 1500);
    if (this.blue) {
      this.coverUpRed();
      setTimeout(() => {
        this.coverDownRed();
        document
          .getElementsByClassName('hero')[0]
          .classList.remove('bg-moonstone');
        this.blue = false;
      }, 1500);
    } else {
      this.coverUpBlue();
      setTimeout(() => {
        this.coverDownBlue();
        document
          .getElementsByClassName('hero')[0]
          .classList.add('bg-moonstone');
        this.blue = true;
      }, 1500);
    }
  }

  closeModal() {
    this.modalOpen = false;
  }
}
