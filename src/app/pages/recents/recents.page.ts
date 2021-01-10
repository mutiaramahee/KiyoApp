import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.page.html',
  styleUrls: ['./recents.page.scss'],
})
export class RecentsPage implements OnInit {

  data: any;

  constructor(
  	private postService: PostService, 
  	private rtr: Router,) { 

  	this.postService.getRecents().subscribe(res =>{
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
