import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.html',
  styleUrls: ['./blogs.css']
})
export class Blogs implements OnInit {

  blogs: any[] = [
    {
      id: 1,
      title: 'How to Generate a Solid On-page Strategy',
      category: 'SEO',
      date: 'Jan 03, 2026',
      image: 'assets/c-5.jpeg',
      excerpt: 'Master the art of on-page optimization with our latest guide and boost your rankings.'
    },
    {
      id: 2,
      title: 'Digital Marketing Trends in 2026',
      category: 'Marketing',
      date: 'Feb 15, 2026',
      image: 'assets/c-4.png',
      excerpt: 'Stay ahead of the curve with these upcoming digital trends that will dominate the industry.'
    },
    {
      id: 3,
      title: 'The Future of AI in Web Development',
      category: 'Tech',
      date: 'March 10, 2026',
      image: 'assets/c-3.jpg',
      excerpt: 'How AI is reshaping the way we build modern websites and automate complex tasks.'
    },
    {
      id: 3,
      title: 'The Future of AI in Web Development',
      category: 'Tech',
      date: 'March 10, 2026',
      image: 'assets/c-3.jpg',
      excerpt: 'How AI is reshaping the way we build modern websites and automate complex tasks.'
    },
    {
      id: 3,
      title: 'The Future of AI in Web Development',
      category: 'Tech',
      date: 'March 10, 2026',
      image: 'assets/c-3.jpg',
      excerpt: 'How AI is reshaping the way we build modern websites and automate complex tasks.'
    }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Ab yahan se error nikal diya hai, data upar initialize kar diya hai.
    // Future mein yahan: this.http.get('api/blogs').subscribe(...) aayega.
  }

  openBlog(id: any) {
  this.router.navigate(['/blog-detail', id]);
}
}