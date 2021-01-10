import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  
  data: any;
  kategori: any;
  search: string;

  constructor(
  		private postService: PostService, 
  		private rtr: Router,
  ) {

  	
	this.postService.getPosts().subscribe(res =>{
	  	this.data = res;
	  	console.log(res);
	});

  	this.postService.getCategory().subscribe(val =>{
  		this.kategori = val;
  	});
  }

  ngOnInit() {
  	
  }

  getDetails(data){
    let navExtras: NavigationExtras ={
       state: {
       		detail: data,
       }
    }
  	this.rtr.navigate(['details'], navExtras);
  }

  getPostCat(data){
    let navExtras: NavigationExtras ={
       state: {
       		id: data,
       }
    }
  	this.rtr.navigate(['category'], navExtras);
  }

  searchPosts(key: any){
  	this.search = key.target.value;
  	this.postService.searchPost(this.search).subscribe(res =>{
	  	this.data = res;
	  	console.log(res);
	});
  }
}
