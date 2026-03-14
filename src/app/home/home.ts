import { Component } from '@angular/core'; // OnInit hata diya
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../services/blog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Implements OnInit hata diya
  contactForm: FormGroup;
  submitted = false;
  error = false;

  // FAQ Tab Logic
  activeMainTab: string = 'Tab 1';
  activeAccordionIndex: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private blogService: BlogService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      budget: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Submit Logic
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.submitted = true;
      this.error = false;
      this.contactForm.reset();
    } else {
      this.error = true;
    }
  }

  // FAQ List
  faqList = [
    { question: 'What services do you offer?', answer: 'Lorem ipsum...' },
    { question: 'How do I get started?', answer: 'Lorem ipsum...' },
    { question: 'Who do you work with?', answer: 'Lorem ipsum...' },
    { question: 'Who is your ideal client?', answer: 'Lorem ipsum...' },
    { question: 'What sets your agency apart?', answer: 'Lorem ipsum...' },
    { question: 'How does your process work?', answer: 'Lorem ipsum...' },
    { question: 'Which industries do you specialize in?', answer: 'Lorem ipsum...' },
  ];

  setMainTab(tab: string) {
    this.activeMainTab = tab;
    this.activeAccordionIndex = 0;
  }

  toggleAccordion(index: number) {
    this.activeAccordionIndex = this.activeAccordionIndex === index ? -1 : index;
  }

  // services
  services = [
    {
      title: 'Creative & Digital Strategy',
      icon: 'fas fa-lightbulb',
      items: ['Influencer Strategy', 'Content Marketing'],
    },
    {
      title: 'Media Planning & Buying',
      icon: 'fas fa-ad',
      items: ['Video Production', 'Branding & Design'],
    },
    {
      title: 'Technology Services',
      icon: 'fas fa-laptop-code',
      items: ['Tech Implementation', 'Consulting'],
    },
    {
      title: 'Analytics & SEO',
      icon: 'fas fa-chart-line',
      items: ['Search Engine Optimization', 'Data Insights'],
    },
    {
      title: 'Consulting Services',
      icon: 'fas fa-bullhorn',
      items: ['Website Development', 'App Design'],
    },
    {
      title: 'Technology',
      icon: 'fas fa-microchip',
      items: ['Media-microchip', 'Public Relations'],
    },
  ];
  latestBlogs: any[] = [];



  ngOnInit() {
    this.blogService.getAllBlogs().subscribe((res) => {
      this.latestBlogs = res.slice(-3).reverse();
    });
  }

  openBlog(id: number) {
    this.router.navigate(['/blog', id]);
  }
}
