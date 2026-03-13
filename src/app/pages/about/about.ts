import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [CommonModule,RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {

  
  activeCard: number | null = null;

  toggle(i: number) {
    if (this.activeCard === i) {
      this.activeCard = null;
    } else {
      this.activeCard = i;
    }
  }
 

  @ViewChild('mafiaAudio') audio!: ElementRef<HTMLAudioElement>;

  isPlaying = false;

  toggleMafiaSound() {
    const audio = this.audio.nativeElement;

    if (audio.paused) {
      audio.play();
      this.isPlaying = true;

      setTimeout(() => {
        this.isPlaying = false;
      }, 500);
    } else {
      audio.pause();
      audio.currentTime = 0;
      this.isPlaying = false;
    }
  }

  industries = [
    {
      img: 'assets/Healthcare.png',
      title: 'Healthcare',
    },
    {
      img: 'assets/Education.png',
      title: 'Education',
    },
    {
      img: 'assets/Real_Estate.png',
      title: 'Real Estate',
    },
    {
      img: 'https://www.rankhigher.in/uploads/15598412275.png',
      title: 'Home Decor',
    },
    {
      img: 'assets/Home_Devore.png',
      title: 'Travel',
    },
    {
      img: 'assets/retailer.png',
      title: 'Retailer',
    },
    {
      img: 'assets/IT.png',
      title: 'Information Technology',
    },
    {
      img: 'assets/B2B.png',
      title: 'B2B Business',
    },
    {
      img: 'assets/FMCG.png',
      title: 'FMCG',
    },
  ];

  contact() {
    alert('Redirect to contact page');
  }
}


