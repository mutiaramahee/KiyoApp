import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  
  data: any;
  id: any;

  constructor(
  				private postService: PostService,
  				private rtr: Router) { 
  		this.id = this.rtr.getCurrentNavigation().extras.state.id;

  		this.postService.getPostsCat(this.id).subscribe(res =>{
	  		this.data = res;
	  		console.log(res);
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
}
