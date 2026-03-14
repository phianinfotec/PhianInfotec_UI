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
      desc: 'We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.',
    
      gif: 'assets/creative.gif',
    },

    {
      title: 'Media Planning <br>& Buying',
      desc: 'We help you profitably define your marketing goals with our expertise in media planning and buying.',
     
      gif:'assets/money.gif',
    },

    {
      title: 'Analytics & SEO',
      desc: 'The P in Phian stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.',
     
      gif: 'assets/seo.gif',
    },

    {
      title: 'Branding & Marketing <br>Communications',
      desc: 'When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.',
  
      gif: 'assets/branding.gif',
    },

    {
      title: 'Mobile & Website <br>UI/UX',
      desc: 'From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.',
     
      gif: 'assets/mobile2-unscreen.gif',
    },

    {
      title: 'Influencer <br>Management',
      desc: 'To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.',
    
      gif: 'assets/social.gif',
    },

    {
      title: 'Video <br>Production',
      desc: 'A perfect storyline is incomplete without the right set of shots taken from the perfect angles.',
      gif: 'assets/vedio3.gif',
    },

    {
      title: 'Consulting Services',
      desc: 'We do a thorough research and integrate industry insights with internet trends to give you the best advice.',
      gif: 'assets/consulting.gif',
    },

    {
      title: 'Technology',
      desc: 'Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.',
      gif: 'assets/tech1.gif',
    },
  ];
}
