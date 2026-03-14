import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetail implements OnInit {
  blogData: any = null;

  allBlogs = [
    {
      id: 1,
      title: 'How to Generate a Solid On-page Strategy',
      author: 'Phian Team',
      date: 'Jan 03, 2026',
      category: 'SEO',
      image: 'assets/c-2.jpg',
      excerpt: 'Master the art of on-page optimization with our latest guide and boost your rankings.',
      content: [
        'On-page SEO is the backbone of your digital presence. In this guide, we explore how to optimize your meta tags, headers, and content structure.',
        'Quality content remains the king. Search engines are getting smarter at understanding user intent, so your strategy must focus on value delivery.',
        'Technical aspects like site speed and mobile responsiveness are no longer optional. They are critical ranking factors in 2026.'
      ]
    },
    {
      id: 2,
      title: 'Digital Marketing Trends in 2026',
      author: 'Phian Team',
      date: 'Feb 15, 2026',
      category: 'Marketing',
      image: 'assets/images/blog2.jpg',
      excerpt: 'Stay ahead of the curve with these upcoming digital trends.',
      content: [
        'AI-driven personalization is reaching new heights. Users expect brands to know their needs before they even express them.',
        'Video content continues to dominate engagement metrics across all platforms.',
        'Voice search optimization is becoming a priority as smart devices become more integrated into daily life.'
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  ngOnInit(): void {
    // Sirf browser par window scroll chalayein
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
    
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.blogData = this.allBlogs.find(b => b.id === id);
    });
  }
}