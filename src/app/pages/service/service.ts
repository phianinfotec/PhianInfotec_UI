import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrls: ['./service.css'],
})
export class Service {
    industries = [
    { name: 'Healthcare', icon: 'assets/Healthcare.png', class: 'cd4' },
    { name: 'Education', icon: 'assets/Education.png', class: 'cd1' },
    { name: 'Real Estate', icon: 'assets/Real_Estate.png', class: 'cd5' },
    { name: 'Home Decor', icon: 'assets/Home_Devore.png', class: 'cd1' },
    { name: 'Retail', icon: 'assets/retailer.png', class: 'cd11' },
    { name: 'Information Technology', icon: 'assets/IT.png', class: 'cd4' },
    { name: 'B2B & Industrial Products', icon: 'assets/B2B.png', class: 'cd8' },
    { name: 'FMCG', icon: 'assets/FMCG.png', class: 'cd3' }
  ];

  services = [
    {
      title: 'Creative & <br>Digital Strategy',
      desc: 'We marinate strategies that best suit your business objectives.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/01-service-social-media-creative-srtategy.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/01-service-gif-social-media-creative-srtategy.gif',
    },

    {
      title: 'Media Planning <br>& Buying',
      desc: 'We help you profitably define your marketing goals.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/02-service-media-planning-buying.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/02-service-gif-media-planning-buying.gif',
    },

    {
      title: 'Analytics & SEO',
      desc: 'Our SEO and Analytics team delivers performance insights.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/03-service-analytics-seo.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/03-service-gif-analytics-seo.gif',
    },

    {
      title: 'Branding & Marketing <br>Communications',
      desc: 'We give your brand a powerful voice.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/04-service-branding-marketing-communications.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/04-service-gif-branding-marketing-communications.gif',
    },

    {
      title: 'Mobile & Website <br>UI/UX',
      desc: 'User friendly interface crafted perfectly.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/05-service-mobile-website-ui-ux.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/05-service-gif-mobile-website-ui-ux.gif',
    },

    {
      title: 'Influencer <br>Management',
      desc: 'We find the right influencer for your brand.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/06-service-influencer-management.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/06-service-gif-influencer-management.gif',
    },

    {
      title: 'Video <br>Production',
      desc: 'Perfect storyline with perfect shots.',
      img: 'https://socialpanga.com/wp-content/uploads/2021/04/07-service-videio-production.png',
      gif: 'https://socialpanga.com/wp-content/uploads/2021/04/07-service-gif-videio-production.gif',
    },
  ];
}
