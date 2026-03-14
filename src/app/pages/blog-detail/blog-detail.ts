import { Component } from '@angular/core';
import { BlogService } from '../../services/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.blogService.getBlogById(Number(id)).subscribe((res) => {
      this.blog = res;
    });
  }
}
