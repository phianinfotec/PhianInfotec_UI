import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

interface PortfolioItem {
  type: 'web' | 'campaign' | 'reels';
  title?: string;
  image?: string;
  video?: string;
  link?: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /* FILTER */

  activeFilter: 'all' | 'web' | 'campaign' | 'reels' = 'all';

  setFilter(type: 'all' | 'web' | 'campaign' | 'reels') {
    this.activeFilter = type;
  }

  /* DATA */

  Campaigns = [
    { image: 'assets/work-1.jpeg', title: 'Krishna Construction' },
    { image: 'assets/work-2.jpeg', title: 'Pradhan Madam Academy' },
    { image: 'assets/work-3.jpeg', title: 'SHPL' },
    { image: 'assets/work-4.jpeg', title: 'Dr. Saket Mundhada Orthopedic Clinic' },
    { image: 'assets/work-7.jpeg', title: 'Preeti Poddar' },
    { image: 'assets/work-8.jpeg', title: 'Abhyudhya Piles' },
    { image: 'assets/work-9.jpeg', title: 'Design Inside' },
    { image: 'assets/work-5.jpeg', title: 'Mukunda Infraventures' },
    { image: 'assets/work-6.jpeg', title: 'The City Dhaba' },
  ];

  works = [
    { image: 'assets/website_1.png', title: 'Shravan Hospital', link: 'https://shravanhospital.com' },
    { image: 'assets/website_2.jpg', title: 'Abhyudaya Hospital', link: 'https://pilesfistulacure.com/' },
    { image: 'assets/website_3.jpg', title: 'Central India School', link: 'https://cipskamptee.in/' },
    { image: 'assets/website_4.png', title: 'Design Inside', link: 'https://designinside.co.in/' },
    { image: 'assets/c-5.jpeg', title: 'Shree Mundhada Advance Orthopedic Clinic', link: 'https://drsaketmundhada.com/home' },
    { image: 'assets/c-6.jpeg', title: 'Krishna Constructions', link: 'https://krishnabuilders.com/' },
    { image: 'assets/c-7.jpg', title: 'Mukunda Infraventures Private Limited', link: 'https://mukundainfraventures.in/' },
  ];

  reels = [
    { video: 'assets/v-1.mp4', title: 'Reel 1' },
    { video: 'assets/v-2.mp4', title: 'Reel 2' },
    { video: 'assets/v-3.mp4', title: 'Reel 3' },
    { video: 'assets/v-4.mp4', title: 'Reel 4' },
  ];

  /* FILTER RESULT */

  get filteredItems(): PortfolioItem[] {

    const web = this.works.map(x => ({
      type:'web' as const,
      title:x.title,
      image:x.image,
      link:x.link
    }));

    const camp = this.Campaigns.map(x => ({
      type:'campaign' as const,
      title:x.title,
      image:x.image
    }));

    const reels = this.reels.map(x => ({
      type:'reels' as const,
      title:x.title,
      video:x.video
    }));

    if(this.activeFilter==='web') return web;
    if(this.activeFilter==='campaign') return camp;
    if(this.activeFilter==='reels') return reels;

    return [...web,...camp,...reels];

  }

  /* ULTRA HOVER PLAY */

  ngAfterViewInit(){

    if(isPlatformBrowser(this.platformId)){

      setTimeout(()=>{

        const cards = document.querySelectorAll('.ultra-card');

        cards.forEach(card=>{

          const video = card.querySelector('video') as HTMLVideoElement;

          if(video){

            card.addEventListener('mouseenter', ()=> video.play());
            card.addEventListener('mouseleave', ()=> video.pause());

          }

        });

      });

    }

  }

}