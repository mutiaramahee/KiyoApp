import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://kiyo-blog.000webhostapp.com/posts';
  idpost: number;
  idkat: number;
  key: string;

  constructor(private http: HttpClient) { }

  getPosts(){
  	return this.http.get(`${this.url}`)
  		.pipe(map((res: any) =>{
  			return res;
  		}));
  }

  getPostsCat(idkat: number){
  	return this.http.get(`${this.url}/kategori/${idkat}`)
  		.pipe(map((res: any) =>{
  			return res;
  		}));
  }

  getCategory(){
  	return this.http.get(`${this.url}/kategori`)
  		.pipe(map((val: any) =>{
  			return val;
  		}));
  }

  getComment(idpost: number){
  	return this.http.get(`${this.url}/komentar/${idpost}`)
  		.pipe(map((kom: any) =>{
  			return kom;
  		}));
  }

  getRecents(){
  	return this.http.get(`${this.url}/recent`)
  		.pipe(map((res: any) =>{
  			return res;
  		}));
  }

  searchPost(key: string){
  	return this.http.get(`${this.url}/search/${key}`)
  		.pipe(map((res: any) =>{
  			return res;
  		}));	
  }

}
