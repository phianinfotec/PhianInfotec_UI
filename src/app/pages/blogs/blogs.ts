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

  blogs:any[] = [];

  api = 'https://69b5341bbe587338e7154b2b.mockapi.io/api/blogs';

  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.http.get<any[]>(this.api).subscribe(res=>{
      this.blogs = res.reverse();
    })
  }

  openBlog(id:any){
    this.router.navigate(['/blog-detail',id]);
  }

}