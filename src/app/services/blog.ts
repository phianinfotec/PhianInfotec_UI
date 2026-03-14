import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  api = 'https://69b5341bbe587338e7154b2b.mockapi.io/api/blogs';

  constructor(private http: HttpClient) {}

  getAllBlogs(){
    return this.http.get<any[]>(this.api);
  }

  getBlogById(id:number){
    return this.http.get<any>(`${this.api}/${id}`);
  }

}