import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  activeTab = 'web';

  showTab(tab: any) {
    this.activeTab = tab;
  }

  viewMode: string = 'overview';

  openSection(type: string) {
    this.viewMode = type;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack() {
    this.viewMode = 'overview';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 ngAfterViewInit() {

  const videos = document.querySelectorAll('video');

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const video = entry.target as HTMLVideoElement;

        const source = video.querySelector('source') as HTMLSourceElement;

        if (source && source.dataset['src']) {

          source.src = source.dataset['src'];
          video.load();

        }

        observer.unobserve(video);

      }

    });

  });

  videos.forEach(v => observer.observe(v));

}

  playVideo(video: HTMLVideoElement) {
    video.play();
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }

  Campaigns = [
    { image: 'assets/work-1.jpeg', title: 'Krishna Construction' },
    { image: 'assets/work-2.jpeg', title: 'Pradhan Madam Academy' },
    { image: 'assets/work-3.jpeg', title: 'Dr. Saket Clinic' },
    { image: 'assets/work-4.jpeg', title: 'Preeti Poddar' },
    { image: 'assets/work-5.jpeg', title: 'Abhyudaya Pills' },
    { image: 'assets/work-6.jpeg', title: 'Design Inside' },
    { image: 'assets/work-7.jpeg', title: 'SHP' },
    { image: 'assets/work-8.jpeg', title: 'Mukunda Infrastructures' },
    { image: 'assets/work-9.jpeg', title: 'The City Dhaba' },
  ];

  works = [
    {
      image: 'assets/website_1.png',
      title: 'Shravan Hospital Private Limited',
      link: 'https://example.com',
    },
    {
      image: 'assets/website_2.jpg',
      title: 'Abhyudaya Piles Ayurveda & Lazer Hospital',
      link: 'https://example.com',
    },
    {
      image: 'assets/website_3.jpg',
      title: 'Central India Public School',
      link: 'https://example.com',
    },
    { image: 'assets/website_4.png', title: 'Design Inside', link: 'https://example.com' },
    {
      image: 'assets/website_5.jpeg',
      title: 'Shree Mundhada Advance Orthopedic Clinic',
      link: 'https://example.com',
    },
    { image: 'assets/website_6.jpeg', title: 'Krishna Constructions', link: 'https://example.com' },
    {
      image: 'assets/website_7.jpg',
      title: 'Mukunda Infraventures Private Limited',
      link: 'https://example.com',
    },
  ];

  reels = [
    {
      video: 'assets/v-1.mp4',
    },
    {
      video: 'assets/v-2.mp4',
    },
    {
      video: 'assets/v-3.mp4',
    },
    {
      video: 'assets/v-4.mp4',
    },
  ];
}
